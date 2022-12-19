//contact form variables
let senderEmail = document.getElementById("senderEmail");
let senderName = document.querySelector("#senderName");
let subject = document.querySelector("#subject");
let editorInputs = document.querySelector("#editor");
let contactForm = document.querySelector("#contact-form");
//login form variables
let LoginForm = document.querySelector("#login-form");
let password = document.querySelector("#password");
let userName = document.querySelector("#username");
//subscribe form
let subsForm = document.querySelector("#subscribe-form");
let emailForSub = document.querySelector("#emailForSub");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValidator();
});
const showError = (element, message) => {
  let inputControl = element.parentElement;
  let errordisplay = inputControl.querySelector(".ErrMsg");
  errordisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const showSuccess = (element) => {
  let inputControl = element.parentElement;
  let errordisplay = inputControl.querySelector(".ErrMsg");
  errordisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const inputValidator = () => {
  let senderEmailValue = senderEmail.value.trim();
  let senderNameValue = senderName.value.trim();
  let subjectValue = subject.value.trim();
  const re = /\S+@\S+\.\S+/g;
  let result = re.test(senderEmailValue);
  if (senderEmailValue === "") {
    showError(senderEmail, "sender email is required");
  } else if (!result) {
    showError(senderEmail, "typed email is inavlid");
  } else {
    showSuccess(senderEmail);
  }
  if (senderNameValue === "") {
    showError(senderName, "sender name is required");
  } else {
    showSuccess(senderName);
  }
  if (subjectValue === "") {
    showError(subject, "add a subject please!");
  } else {
    showSuccess(subject);
  }
};
LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  LoginputValidator();
});
const LoginputValidator = () => {
  let passwordValue = password.value.trim();
  let userNameValue = userName.value.trim();
  if (passwordValue === "") {
    showError(password, "please fill password");
  } else {
    showSuccess(password);
  }
  if (userNameValue === "") {
    showError(userName, "please fill your username ");
  } else {
    showSuccess(userName);
  }
};
subsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  subscribeDataValidtion();
});
const subscribeDataValidtion = () => {
  const emailValue = emailForSub.value.trim();
  const re = /\S+@\S+\.\S+/g;
  let result = re.test(emailValue);
  if (emailValue === "") {
    showError(emailForSub, "email should not be empty");
  } else if (!result) {
    showError(emailForSub, "typed email is invalid");
  } else {
    showSuccess(emailForSub);
  }
};
