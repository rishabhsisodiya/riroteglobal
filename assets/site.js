// Shared behaviour for sub-pages: frosted nav on scroll + mobile menu.
(function () {
  var nav = document.getElementById('navbar');
  var toggle = document.getElementById('menuToggle');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (!toggle) return;
  function setOpen(open) {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('menu-open'));
  });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('menu-open')) { setOpen(false); toggle.focus(); }
  });
})();
