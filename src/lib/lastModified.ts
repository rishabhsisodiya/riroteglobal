// Build-time "last updated" dates for pages, taken from git so they change only when content does.
import { execFileSync } from 'node:child_process';

const today = (): string => new Date().toISOString().slice(0, 10);

const git = (args: string[]): string => execFileSync('git', args, { encoding: 'utf8' }).trim();

/** YYYY-MM-DD a repo file last changed: today if it has uncommitted edits, else its last commit. */
function fileDate(repoFile: string): string {
  try {
    if (git(['status', '--porcelain', '--', repoFile])) return today();
    const date = git(['log', '-1', '--format=%cs', '--', repoFile]);
    if (date) return date;
  } catch {
    // Not a git checkout: fall back to the build date.
  }
  return today();
}

/** The latest change date across the files a page is built from. */
export function lastModified(...repoFiles: string[]): string {
  return repoFiles.map(fileDate).sort().at(-1) ?? today();
}

/** "October 2026" from YYYY-MM-DD, for visible "Updated" lines. */
export const monthYear = (isoDate: string): string =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
