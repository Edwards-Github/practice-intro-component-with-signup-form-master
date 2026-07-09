const inputGroups = document.querySelectorAll(".input-group:not(.email-group)");
const emailGroup = document.querySelector(".email-group");
const form = document.querySelector(".form");
const email = document.querySelector(".email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputsHaveError = checkInputs(inputGroups);
  const emailHasError = checkEmail(email);

  if (inputsHaveError || emailHasError) {
    form.classList.add("error-form");
  } else {
    form.classList.remove("error-form");
  }
});

function checkInputs(inputGroups) {
  let hasError = false;

  for (const input of inputGroups) {
    const userInput = input.querySelector(".input");
    const error = input.querySelector(".error");
    const errorMessage = input.nextElementSibling; // the <p class="error-m"> right after this div

    if (userInput.value === "") {
      error.classList.add("error-icon");
      errorMessage.classList.add("error-message");
      hasError = true;
    } else {
      error.classList.remove("error-icon");
      errorMessage.classList.remove("error-message");
    }
  }

  return hasError;
}

function checkEmail(email) {
  const errorIcon = emailGroup.querySelector(".error-email-icon");
  const errorMessage = emailGroup.nextElementSibling;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.checkValidity() || !emailPattern.test(email.value)) {
    errorIcon.classList.add("error-icon");
    errorMessage.classList.add("error-message");
    return true;
  } else {
    errorIcon.classList.remove("error-icon");
    errorMessage.classList.remove("error-message");
    return false;
  }
}
