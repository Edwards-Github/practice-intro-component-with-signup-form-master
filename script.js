const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const email = document.querySelector(".email");
const form = document.querySelector(".form");

button.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs(inputs);
  checkEmail(email);
});

function checkInputs(inputs) {
  for (const input of inputs) {
    input.setCustomValidity("");
    if (input.value === "") {
      input.setCustomValidity(`${input.placeholder} cannot be empty.`);
    } else {
      input.innerText = input.value;
    }
  }
  form.reportValidity();
}

function checkEmail(email) {
  // null check
  if (!email) {
    return;
  }

  const emailValue = email.value;
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    email.setCustomValidity("Looks like this is not an email.");
    form.reportValidity();
  }
}
