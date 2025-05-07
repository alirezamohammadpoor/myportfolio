/* Toggle for menu and off-screen menu visibility */

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.querySelector("input[type='email']");
  const phoneInput = document.querySelector("input[type='tel']");

  /* Making sure it's no space before or after @ and contains "."
  
  String starts with number or + or ( */
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^[0-9\s\-\+\(\)]{7,15}$/.test(phone);

  const validSubmit = document.querySelector(".successful-submit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim()) {
      isValid = false;
    }
    if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
    }
    if (!isValidPhone(phoneInput.value.trim())) {
      isValid = false;
    }

    /* If all fields valid, show success message, reset form and hide message after 3 seconds */
    if (isValid) {
      document.querySelector(".successful-submit").classList.toggle("active");
      form.reset();

      setTimeout(() => {
        validSubmit.classList.remove("active");
      }, 3000);
    }
  });
});
