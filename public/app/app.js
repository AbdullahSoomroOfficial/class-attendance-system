import { auth } from "../firebase.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const attendanceSheet = document.getElementById("attendanceSheet");
const signOutBtn = document.getElementById("signOut");

onAuthStateChanged(auth, (user) => {
  if (user) {
    return;
  } else {
    // User is signed out
    location.replace("../index.html");
  }
});

signOutBtn.addEventListener("click", function () {
  signOut(auth);
});

attendanceSheet.addEventListener("click", function () {
  location.replace("ATTENDANCE_SYSTEM/index.html");
});
