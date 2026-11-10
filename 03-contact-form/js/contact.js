/* ==========================================================
   JavaScript checkpoint 03: contact form
   This file is linked only from index.html (the Bio page).
   ========================================================== */

// 1. Find the parts of the page we need
const form = document.querySelector("#contact-form");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");
const thanks = document.querySelector("#contact-thanks");

// Use our own messages instead of the browser's built-in ones.
// Without JavaScript, the browser still checks the form itself.
form.noValidate = true;

// 2. Show an error message under a field, or clear it
function showError(field, text) {
  const error = document.querySelector(`#${field.id}-error`);
  error.textContent = text;

  if (text === "") {
    field.removeAttribute("aria-invalid");
  } else {
    field.setAttribute("aria-invalid", "true");
  }
}

// 3. Check the form when the visitor tries to send it
form.addEventListener("submit", function (event) {
  // Stop the browser from sending the form: there is no server to receive it yet
  event.preventDefault();

  // Read what the visitor typed, without spaces at the start and end
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  let valid = true;
  thanks.textContent = "";

  if (name === "") {
    showError(nameField, "Please enter your name.");
    valid = false;
  } else {
    showError(nameField, "");
  }

  if (!email.includes("@")) {
    showError(emailField, "Please enter an email address, such as name@example.com.");
    valid = false;
  } else {
    showError(emailField, "");
  }

  if (message.length < 20) {
    showError(messageField, `Please write at least 20 characters (you have ${message.length}).`);
    valid = false;
  } else {
    showError(messageField, "");
  }

  // 4. If everything is fine, thank the visitor. Otherwise, move to the first problem.
  if (valid) {
    // textContent shows the name as plain text, so typed HTML cannot run
    thanks.textContent = `Thank you, ${name}. Your message is ready to send.`;
    form.reset();
  } else {
    form.querySelector('[aria-invalid="true"]').focus();
  }
});
