document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelectorAll('.nav__menu a');

  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');

    const isOpen = nav.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

});
