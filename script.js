const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const email = document.querySelector(".email");

button.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs(inputs);
  checkEmail(email);
});

function checkInputs(inputs) {
  for (input of inputs) {
    if (input.value === "") {
      console.log(`${input.placeholder} cannot be empty.`);
    } else {
      input.innerText = input.value;
      console.log(input.value);
    }
  }
}

function checkEmail(email) {
  // null check
  if (!email) {
    return;
  }

  const emailValue = email.value;
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    console.log("Looks like this is not an email.");
  }
}
