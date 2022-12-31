"use strict";
const submit = document.querySelector("#submit");
const addTask = document.querySelector("#addtask");
const taskDueDate = document.querySelector("#taskDueDate");
const addComments = document.querySelector("#addComments");
const msg = document.querySelector("#msg");
const posts = document.querySelector("#posts");
const cardTask = document.querySelector("#cardTask");
const cardDate = document.querySelector("#cardDate");
//THERE MIGHT BE A BETTER WAY BUT TRYING THIS FOR NOW
const radioPanda = document.querySelector("#radioPanda");
const avatarPanda = document.querySelector("#avatarPanda");
const userAvatarHere = document.querySelector("#userAvatarHere");

//document.addEventListener("click");
//LOOK ------------>CREATING CARDS--freeCodeCamp way
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

const formValidation = () => {
  if (addTask.value === "") {
    msg.textContent = "Task cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["task"] = addTask.value;
  data["comment"] = addComments.value;
  data["date"] = taskDueDate.value;
  //data["panda"] = avatarPanda.value;
  console.log(data);
  createPost();
};
//if something is clicked, return the pic??
function pickAvatar() {}

const createPost = () => {
  //THIS IS A POST TEMPLATE - FOR AVATARS, I CAN DO A FUNCTION TO PUSH
  //THE ONE THAT THE USER PICKED TO A VARIABLE?
  cardTask.innerHTML += `<div class="row g-0">
  <div class="col-md-2 pt-2">
    <img
      src="assets/panda.svg"
      class="img-fluid"
      id="userAvatarHere"
      style="max-width: 75%"
      alt="user image"
    />
  </div>

  <div class="col-md-10">

    <div class="card-body text-start">
      <div id="cardTask">${data.task}</div>
      <div id="cardComment">${data.comment}</div>
    </div>

    <div class="card-body text-end">
      <div class="d-inline pe-5" id="cardDate">${data.date}</div>

      <div class="d-inline pe-2">
        <img
          class="actions-icon-bootstrap"
          src="assets/edit.svg"
          alt="star"
          style="max-width: 5%"
        />
      </div>

      <div class="d-inline pe-2">
        <img
          class="actions-icon-bootstrap"
          src="assets/checkbox.svg"
          alt="checkbox"
          style="max-width: 5%"
        />
      </div>

      <div class="d-inline pe-4">
        <img
          class="actions-icon-bootstrap"
          src="assets/x.svg"
          alt="x"
          style="max-width: 5%"
        />
      </div>
    </div>
  </div>
</div>
            `;

  addTask.value = "";
  taskDueDate.value = "";
  addComments.value = "";
};

//LOOK ------------>CREATING CARDS
//This works but not great

// document.querySelector("#submit").addEventListener("click", createUserCard);

// function createUserCard() {
//   const addTask = document.querySelector("#addtask").value;
//   const taskDueDate = document.querySelector("#taskDueDate").value;
//   const addComments = document.querySelector("#addComments").value;
//   console.log("button clicked");

//   //add to DOM
//   document.querySelector(".card-text").textContent = `task: ${addTask}`;
//   document.querySelector(
//     ".card-comments"
//   ).textContent = `comments: ${addComments}`;
//   document.querySelector(".card-date").textContent = `${taskDueDate}`;
// }

//LOOK ------------>FETCHING AND ADDING USER NAME TO DOM
// function getName() {
//   let name = prompt("To begin adding tasks, what is your first name?");

//   if (name == null || name == "") {
//     alert("You must enter your name into the box!");
//     tryAgain();
//     return false;
//   }

// Remove leading and trailing whitespace from the name
// name = name.trim();

// Check if the name contains only letters and spaces
//   if (!/^[a-zA-Z\s]+$/.test(name)) {
//     alert("Please only enter letters and spaces!");
//     tryAgain();
//     return false;
//   } else {
//     if (name) {
//       document.getElementById("greeting").innerHTML = `Hi, ${name}!`;
//     }
//     return name;
//   }
// }

// function tryAgain() {
//   getName();
// }

// const userName = getName();
// if (userName) {
//   document.getElementById("greeting").innerHTML = `Hi, ${userName}!`;
// }

//onclick event for the "add task button"
// const addAUserButton = document.querySelector("#getUserName");
// addAUserButton.addEventListener("click", getName);

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
