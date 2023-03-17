import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const message = document.getElementById("message");

function validateForm() {
  if (email.value === "" && password.value === "") {
    message.innerText = "Please fill in the fields!";
  } else {
    signIn();
  }
}

function signIn() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      location.replace("app/app.html");
    })
    .catch((error) => {
      message.innerHTML = "Invalid Credentials!";
    });
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});
