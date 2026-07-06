const inputGroups = document.querySelectorAll(".input-group");
const emailGroup = document.querySelector(".email-group");
const button = document.querySelector(".button");
const form = document.querySelector(".form");

button.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs(inputGroups);
  checkEmail(emailGroup);
});

function checkInputs(inputGroups) {
  for (const input of inputGroups) {
    const userInput = input.querySelector(".input");
    const error = input.querySelector(".error");
    const errorMessage = input.nextElementSibling; // the <p class="error-m"> right after this div

    if (userInput.value === "") {
      error.classList.add("error-icon");
      errorMessage.classList.add("error-message");
      form.classList.add("error-form");
    } else {
      userInput.innerText = userInput.value;
      error.classList.remove("error-icon");
      errorMessage.classList.remove("error-message");
      form.classList.add("error-form");
    }
  }
}

function checkEmail(emailGroup) {
  const emailValue = emailGroup.querySelector(".input").value;
  const errorIcon = emailGroup.querySelector(".error-email-icon");
  const errorMessage = emailGroup.nextElementSibling;

  if (!emailValue) {
    return;
  }

  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errorIcon.classList.add("error-icon");
    errorMessage.classList.add("error-message");
  }
}
