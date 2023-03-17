import { auth } from "../firebase.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const attendanceSheet = document.getElementById("attendanceSheet");
const signOutBtn = document.getElementById("signOut");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //   const uid = user.uid;
    // ...
  } else {
    // User is signed out
    location.replace("../index.html");
  }
});

signOutBtn.addEventListener("click", function () {
  signOut(auth);
  // .then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
});

attendanceSheet.addEventListener("click", function () {
  location.replace("ATTENDANCE_SYSTEM/index.html");
});
