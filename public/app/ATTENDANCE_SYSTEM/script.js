import { students } from "./students.js";
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// 3rd Year Subjects (2nd Semester)
const SUBJECTS = [
  "Mobile Application Development (Theory)",
  "Mobile Application Development (Lab)",
  "Sofware Design And Architecture",
  "Data Science",
  "Secure Software Development",
  "Multimedia Systems And Design (Theory)",
  "Multimedia Systems And Design (Lab)",
  "Software Project Management (Theory)",
  "Software Project Management (Lab)",
];

const MAX_STUDENTS_IN_CLASS = 130;

// selecting all grid-items
const gridItems = document.querySelectorAll(".grid-item");
// submit button for FORM
const submit = document.getElementById("submit");
// selecting subject selection from given options
const subject = document.getElementById("subject");

//Adding event listener to every gridItem
for (let item of gridItems) {
  item.addEventListener("click", function () {
    this.classList.toggle("present");
  });
}

// Validating data
// 1. Subject must be select and must be from above SUBJECTS Array on line 2
// 2. Atleast one student must be present
function validateSubjectAndAttendance() {
  const selectedSubject = subject.value;

  // Checking if subject is selected or not
  if (selectedSubject) {
    // Checking if selected subject is valid or not. It must be from SUBJECTS Array.
    if (SUBJECTS.includes(selectedSubject)) {
      // Checking if there is a student present
      for (let i = 0; i < students.length; i++) {
        if (gridItems[i].classList.contains("present")) {
          takeAttendance();
          generateExcelSheet(students);
          // below statement is to stop loop
          return true;
        }
      }
    } else {
      alert("Invalid subject!!!");
      // below statement is to stop "if" statement from executing according to the code and logic is structured. It can be written in much better way.
      return true;
    }
  } else {
    alert("Please select a subject!!!");
    // below statement is to stop "if" statement from executing according to the code and logic is structured. It can be written in much better way.
    return true;
  }
}

function takeAttendance() {
  // Creating students attendance
  for (let i = 0; i < students.length; i++) {
    if (gridItems[i].classList.contains("present")) {
      students[i]["Presence"] = "1";
    } else {
      students[i]["Presence"] = "0";
    }
  }
}

function generateExcelSheet(data) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");
  //Setting 2nd column width to 40 characters
  worksheet["!cols"] = [null, { wch: 40 }];
  XLSX.writeFile(workbook, "AttendanceSheet_SWE_2K20.xlsx");
  // refresh the page
  location.reload();
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const isWorkDone = validateSubjectAndAttendance();
  // If no student found present then log this below statement
  if (!isWorkDone) {
    alert("Atleast ONE student must be present");
  }
  // else {
  // // Creating students attendance
  // for (let i = 0; i < 5; i++) {
  //     if(gridItems[i].classList.contains('present')) {
  //         students[i]['Presence'] = 'Present';
  //     } else {
  //         students[i]['Presence'] = 'Absent';
  //     }
  // }
  //-- Pass js object directly without JSON.stringfy --//
  // generateExcelSheet(students);
  // }
});

//when user is signout send him to login page
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //   const uid = user.uid;
    // ...
  } else {
    // User is signed out
    location.replace("../../index.html");
  }
});
