/**
 * prep-notes-src/*.docx  ->  src/content/notes/*.md
 * Images -> public/notes-img/<slug>/*.webp   (referenced as /prep/notes-img/<slug>/..)
 *
 * "notes" docs marked `split` are broken into one file per top-level (#) heading
 * so pages stay small. "questions" docs stay as a single file.
 * Code fencing and heading promotion are heuristic — expect a manual polish pass.
 *
 * Run:  npm run convert
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mammoth from 'mammoth';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.resolve(ROOT, '..', 'prep-notes-src');
const NOTES_DIR = path.join(ROOT, 'src/content/notes');
const IMG_ROOT = path.join(ROOT, 'public/notes-img');
// Image URLs are written base-relative ("/notes-img/..."); a rehype plugin
// prefixes them with the site base at build time (see astro.config.mjs).
const BASE = '';
const TODAY = new Date().toISOString().slice(0, 10);

const MAP = {
  'JavaScript Notes.docx':             { slug: 'javascript-notes',     track: 'javascript',    kind: 'notes',     title: 'JavaScript Notes',              lang: 'js',  split: true },
  'JavaScript Interview Question.docx': { slug: 'javascript-questions', track: 'javascript',    kind: 'questions', title: 'JavaScript Interview Questions', lang: 'js' },
  'React JS.docx':                      { slug: 'react-notes',          track: 'react',         kind: 'notes',     title: 'React Notes',                   lang: 'jsx', split: true },
  'React JS Interview Question.docx':   { slug: 'react-questions',      track: 'react',         kind: 'questions', title: 'React Interview Questions',      lang: 'jsx' },
  'Nodejs.docx':                        { slug: 'nodejs-notes',         track: 'nodejs',        kind: 'notes',     title: 'Node.js Notes',                 lang: 'js',  split: true },
  'System Design  Notes.docx':          { slug: 'system-design-notes',  track: 'system-design', kind: 'notes',     title: 'System Design — Reference Notes', lang: 'js', noFence: true,
                                         frontmatterExtra: { order: 5, slug: 'reference' } },
};

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced', emDelimiter: '_' });
td.use(gfm);
td.addRule('pre', {
  filter: ['pre'],
  replacement: (_c, node) => '\n```\n' + node.textContent.replace(/\n+$/, '') + '\n```\n',
});

const STRONG =
  /(^\s*(const|let|var|function|class|import|export|return|for|while|switch|try|catch|def|async|await)\b)|=>|;\s*$|^\s*[}\])];?\s*$|^\s*[\w.$'"[\]]+\s*[:=]\s|\bconsole\.(log|error|warn|info)\b|\brequire\(|\bmodule\.exports|^\s*(app|router|res|req|const|let)\s*\.?\w*\s*\(/;
const PROSE =
  /\b(the|is|are|was|were|this|that|which|when|then|will|can|could|should|would|because|however|note|example|following|above|below|means|used|when we|in the|to the|of the|such as)\b/i;

function looksCode(line) {
  const t = line.trim();
  if (!t) return null;
  const words = t.split(/\s+/).length;
  if (PROSE.test(t) && words >= 8) return false;
  if (STRONG.test(line)) return true;
  if (/^\s{4,}\S/.test(line) && !PROSE.test(t)) return true;
  return false;
}

function fenceCode(md, lang) {
  const lines = md.split('\n');
  const out = [];
  let buf = [];
  let building = false;
  let inFence = false;

  const flush = () => {
    while (buf.length && !buf[buf.length - 1].trim()) buf.pop();
    if (!buf.length) { building = false; return; }
    if (buf.some((l) => STRONG.test(l))) out.push('```' + lang, ...buf.map((l) => l.replace(/\s+$/, '')), '```');
    else out.push(...buf);
    buf = [];
    building = false;
  };

  for (const line of lines) {
    if (/^```/.test(line)) { flush(); inFence = !inFence; out.push(line); continue; }
    if (inFence) { out.push(line); continue; }
    if (/^\s*(#{1,6}\s|>|\||!\[|\[)/.test(line)) { flush(); out.push(line); continue; }
    const v = looksCode(line);
    if (building) {
      if (v === true || v === null) { buf.push(line); continue; }
      flush();
      out.push(line);
      continue;
    }
    if (v === true) { buf = [line]; building = true; continue; }
    out.push(line);
  }
  flush();
  return out.join('\n');
}

function promoteBoldHeadings(md) {
  return md.replace(/^\*\*(.{3,72}?)\*\*[ \t]*$/gm, (m, txt) => {
    const t = txt.trim();
    if (/[.:!?,]$/.test(t)) return m;
    if (!/[a-z]/i.test(t)) return m; // operators, symbols
    if (t.split(/\s+/).length > 11) return m;
    if (/^\d+\./.test(t)) return m;
    return `### ${t}`;
  });
}

function fixHeadingImages(md) {
  // "## ![](x)Title"  ->  image on its own line, then "## Title"
  return md.replace(/^(#{1,6}) *(!\[[^\]]*\]\([^)]*\)) *(.*)$/gm, (_m, h, img, rest) =>
    rest.trim() ? `${img}\n\n${h} ${rest.trim()}` : `${img}`,
  );
}

function dropLeadingJunk(md) {
  const lines = md.split('\n');
  for (let i = 0; i < Math.min(lines.length, 6); i++) {
    const t = lines[i].trim();
    if (!t) continue;
    if (/^#/.test(t)) break;
    if (t.length < 40 && !/[.!?]$/.test(t)) { lines[i] = ''; continue; }
    break;
  }
  return lines.join('\n');
}

function neutralizeHtml(md) {
  let inFence = false;
  return md
    .split('\n')
    .map((l) => {
      if (/^```/.test(l)) { inFence = !inFence; return l; }
      if (inFence) return l;
      return l.replace(/<\/?(script|style|iframe|link|meta|body|head|html|noscript)\b[^>]*>/gi, (s) => '`' + s + '`');
    })
    .join('\n');
}

function tidy(md) {
  return md
    .replace(/ /g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/(?<!`)``(?!`)/g, '') // merge adjacent inline-code from neutralizeHtml, never triple fences
    .replace(/^\s*\|?\s*:?-{3,}:?\s*\|?\s*$/gm, '') // table rule remnants
    .replace(/^\s*\|\s*$/gm, '') // orphan cell pipes from layout tables
    .replace(/[ \t]+\|\s*$/gm, '') // trailing cell pipe
    .replace(/\\_/g, '_') // unescape identifiers like MAX\_TOKENS
    .replace(/^(?:\s*---\s*\n)+/, '')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\\(\d+\.)/gm, '$1')
    .trim();
}

/** Redact things that look like live credentials so they never reach the repo. */
function scrubSecrets(md) {
  return md
    // Discord bot token:  id.timestamp.hmac
    .replace(/\b[A-Za-z0-9_-]{23,28}\.[A-Za-z0-9_-]{6,7}\.[A-Za-z0-9_-]{27,}\b/g, 'YOUR_DISCORD_BOT_TOKEN')
    .replace(/\b(mfa\.[A-Za-z0-9_-]{80,})\b/g, 'YOUR_DISCORD_MFA_TOKEN')
    // AWS / Google / GitHub / OpenAI / Slack
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, 'YOUR_AWS_ACCESS_KEY_ID')
    .replace(/\bAIza[0-9A-Za-z_-]{35}\b/g, 'YOUR_GOOGLE_API_KEY')
    .replace(/\bghp_[0-9A-Za-z]{36}\b/g, 'YOUR_GITHUB_TOKEN')
    .replace(/\bsk-[A-Za-z0-9]{32,}\b/g, 'YOUR_OPENAI_API_KEY')
    .replace(/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g, 'YOUR_SLACK_TOKEN');
}

const kebab = (s) =>
  s
    .toLowerCase()
    .replace(/`[^`]*`/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60) || 'section';

async function saveImage(slug, index, contentType, buffer) {
  const srcExt = ((contentType || 'image/png').split('/')[1] || 'png').replace('x-emf', 'emf').replace('x-wmf', 'wmf');
  const dir = path.join(IMG_ROOT, slug);
  fs.mkdirSync(dir, { recursive: true });
  const raster = ['png', 'jpeg', 'jpg', 'gif', 'webp', 'bmp', 'tiff'].includes(srcExt);
  const ext = raster ? 'webp' : srcExt;
  const name = `img-${String(index).padStart(3, '0')}.${ext}`;
  const dest = path.join(dir, name);
  try {
    if (raster) await sharp(buffer).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
    else fs.writeFileSync(dest, buffer);
  } catch {
    fs.writeFileSync(dest, buffer);
  }
  return { rel: `${BASE}/notes-img/${slug}/${name}`, broken: ['emf', 'wmf'].includes(ext) };
}

function frontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    lines.push(`${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

// Hand fixes for chapter headings that were section dividers / pasted links
// in the source doc rather than real titles.
const TITLE_FIX = {
  'JavaScript Interview Question': 'Algorithms & Big-O',
  'Nodejs Interview Question': 'Production & Deployment Tips',
};

function cleanChapterTitle(raw, body) {
  let t = raw
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // markdown link -> text
    .replace(/\((?:https?:)?\/\/[^)]*\)/g, '') // leftover bare (url)
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[|·\-–—:\s]+$/, '')
    .trim();
  if (TITLE_FIX[t]) return TITLE_FIX[t];
  if (!t || /^https?:\/\//i.test(t) || t.length > 80) {
    const h = body.match(/^#{2,3}\s+(.+)$/m);
    return h ? h[1].replace(/\*\*/g, '').trim() : 'Section';
  }
  return t;
}

/** split cleaned markdown into [{title, body}] on top-level "# " headings */
function splitChapters(md) {
  const lines = md.split('\n');
  const chapters = [];
  let pre = [];
  let cur = null;
  for (const line of lines) {
    const m = line.match(/^# (.+)$/);
    if (m) {
      if (cur) chapters.push(cur);
      cur = { rawTitle: m[1], body: [] };
    } else if (cur) {
      cur.body.push(line);
    } else {
      pre.push(line);
    }
  }
  if (cur) chapters.push(cur);
  if (chapters.length && pre.join('').trim()) {
    chapters[0].body = [...pre, '', ...chapters[0].body];
  }
  return chapters
    .map((c) => {
      const body = c.body.join('\n').trim();
      return { title: cleanChapterTitle(c.rawTitle, body), body };
    })
    // drop empty / pointer-only "chapters" (stray dividers, links to other docs)
    .filter((c) => c.body.split(/\s+/).filter(Boolean).length >= 8);
}

async function convertOne(file, meta) {
  let imgCount = 0;
  let brokenImgs = 0;

  const { value: html, messages } = await mammoth.convertToHtml(
    { path: path.join(SRC_DIR, file) },
    {
      convertImage: mammoth.images.imgElement(async (image) => {
        imgCount += 1;
        const b64 = await image.read('base64');
        const { rel, broken } = await saveImage(meta.slug, imgCount, image.contentType, Buffer.from(b64, 'base64'));
        if (broken) brokenImgs += 1;
        return { src: rel, alt: '' };
      }),
    },
  );

  let md = td.turndown(html);
  md = dropLeadingJunk(md);
  md = fixHeadingImages(md);
  md = promoteBoldHeadings(md);
  if (!meta.noFence) md = fenceCode(md, meta.lang);
  md = neutralizeHtml(md);
  md = tidy(md);
  md = scrubSecrets(md);

  // clear previously generated files for this doc
  for (const f of fs.existsSync(NOTES_DIR) ? fs.readdirSync(NOTES_DIR) : []) {
    if (f.startsWith(meta.slug) && f.endsWith('.md')) fs.rmSync(path.join(NOTES_DIR, f));
  }
  fs.mkdirSync(NOTES_DIR, { recursive: true });

  const base = {
    track: meta.track,
    kind: meta.kind,
    updated: TODAY,
    source: file,
    draft: false,
  };

  if (meta.split) {
    const chapters = splitChapters(md);
    chapters.forEach((ch, i) => {
      const n = i + 1;
      const fm = frontmatter({
        title: ch.title,
        part: meta.title,
        ...base,
        order: n,
        description: `${meta.title.replace(/ Notes.*/, '')} — ${ch.title}.`,
      });
      fs.writeFileSync(path.join(NOTES_DIR, `${meta.slug}-${String(n).padStart(2, '0')}.md`), fm + ch.body + '\n');
    });
    console.log(`  ${meta.slug.padEnd(20)} split into ${chapters.length} chapters  ${imgCount} imgs` + (brokenImgs ? `  (${brokenImgs} emf/wmf)` : ''));
  } else {
    const fm = frontmatter({
      title: meta.title,
      ...base,
      order: meta.frontmatterExtra?.order ?? 1,
      slug: meta.frontmatterExtra?.slug,
      description: `${meta.title} — study notes.`,
    });
    fs.writeFileSync(path.join(NOTES_DIR, `${meta.slug}.md`), fm + md + '\n');
    const fences = (md.match(/^```/gm) || []).length / 2;
    console.log(`  ${meta.slug.padEnd(20)} ${md.split(/\s+/).length} words  ${imgCount} imgs  ${fences} code blocks` + (brokenImgs ? `  (${brokenImgs} emf/wmf)` : '') + (messages.length ? `  [${messages.length} msg]` : ''));
  }
}

async function main() {
  console.log('Converting from', SRC_DIR);
  for (const [file, meta] of Object.entries(MAP)) {
    if (!fs.existsSync(path.join(SRC_DIR, file))) { console.warn('  ! missing:', file); continue; }
    await convertOne(file, meta);
  }
  console.log('Done.');
}

main();
