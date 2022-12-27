// const form = document.getElementById('form');
// const tasks = document.getElementById('tasks');
// const inlineRadio1 = document.getElementById('inlineRadio1');
// const addtask = document.getElementById('addtask');
// const taskDueDate = document.getElementById('taskDueDate');
// const addcomments = document.getElementById('addcomments');
// const taskPriority = document.getElementById('taskPriority');
//const getName = document.getElementById("name");

//document.addEventListener("click");

function getName() {
  let name = prompt("To begin adding tasks, please enter your First Name:");

  if (name == null || name == "") {
    alert("You must enter your name into the box!");
    return false;
  }

  // Remove leading and trailing whitespace from the name
  name = name.trim();

  // Check if the name contains only letters and spaces
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Please only enter letters and spaces!");
    return false;
  } else {
    return name;
  }
}
const name = getName();
if (name) {
  document.getElementById("greeting").innerHTML = "HI, " + name + "!";
}

//form.addEventListener("submit", (e) => {});

// //validation of radio tasks button
// //console.log('hello');
// function taskChecked() {
//    let tasksRadio = document.getElementById('tasks');
//    for (let i = 0; i < tasksRadio.length; i++) {
//     if (tasksRadio[i].checked)
//     break;
//    } if (i === tasksRadio.length) {
//    return alert('No tasks is choosed');
//    }
// }

// //validation of radio icon button

// function iconChecked() {
//     let iconRadio = document.getElementById('inlineRadio');
//     for (let j = 0; j < iconRadio.length; j++) {
//      if (iconRadio[j].checked)
//      break;
//     } if (j === iconRadio.length) {
//     return alert('No icons is choosed');

//     }
//  }
// //group all fields into an object
// let fields = {

// }

// document.addEventListener('DOMContentLoaded', function() {
//     fields.addtask = document.getElementById('addtask');
//     fields.taskDueDate = document.getElementById('task-due-date');
//     fields.addcomments = document.getElementById('addcomments');
//     fields.taskPriority = document.getElementById('task-priority');

// });
//  function isNotEmpty(value) {
//     if (value === null || typeof value === 'undefined') return false;
//     return (value.length > 0);
//  }

//  const submit = document.getElementById('submit');
//  submit.addEventListener('click', validate);
