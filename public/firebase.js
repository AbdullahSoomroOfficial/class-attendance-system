import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWrMwHnahr_dV4JhtruMyLYqQwHR5crdo",
  authDomain: "class-attendance-system-30502.firebaseapp.com",
  projectId: "class-attendance-system-30502",
  storageBucket: "class-attendance-system-30502.appspot.com",
  messagingSenderId: "1010844476156",
  appId: "1:1010844476156:web:39761d32d0b9c64938ed79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
