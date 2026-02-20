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
/* ===========================
   FORM VALIDATION
=========================== */

const form = document.querySelector(".contact__form");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  [name, email, message].forEach(field => {
    field.parentElement.classList.remove("is-invalid");
  });

  if (name.value.trim() === "") {
    name.parentElement.classList.add("is-invalid");
    isValid = false;
  }

  if (!validateEmail(email.value.trim())) {
    email.parentElement.classList.add("is-invalid");
    isValid = false;
  }

  if (message.value.trim() === "") {
    message.parentElement.classList.add("is-invalid");
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    form.reset();
  }
});
