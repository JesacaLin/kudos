"use strict";
const submit = document.querySelector("#submit");
//task input field
const addTask = document.querySelector("#addtask");
//task date field
const taskDueDate = document.querySelector("#taskDueDate");
//task comment field
const addComments = document.querySelector("#addComments");
//error message for empty task field
const msg = document.querySelector("#msg");
//place where text form task input field will render on the card.
const cardTask = document.querySelector("#cardTask");
//place where date will render on the card
const cardDate = document.querySelector("#cardDate");
//radios for My Tasks or Shared Tasks
const myTaskRadio = document.querySelector("#myTaskRadio");
const sharedTaskRadio = document.querySelector("#sharedTaskRadio");
//My Task card
const posts = document.querySelector("#posts");
//My Task card location
const myTaskLocation = document.querySelector("#myTaskLocation");
//Shared Task card
const sharePosts = document.querySelector("#sharePosts");
//shared Task card location
const shareTaskLocation = document.querySelector("#shareTaskLocation");

//LOOK ------------>FETCHING AND ADDING USER NAME TO DOM
function getName() {
  let name = prompt("To begin adding tasks, what is your first name?");

  //if cancel is clicked, the prompt is dismissed.
  if (name == null) {
    return false;
  }

  //if no name is entered, prompted to enter one.
  if (name == "") {
    alert("You must enter your name into the box!");
    tryAgain();
    return false;
  }

  //Remove leading and trailing whitespace from the name
  name = name.trim();

  //Check if the name contains only letters and spaces
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Please only enter letters and spaces!");
    tryAgain();
    return false;
  } else {
    if (name) {
      document.getElementById("greeting").innerHTML = `Hi, ${name}!`;
    }
    return name;
  }
}

function tryAgain() {
  getName();
}

const userName = getName();
if (userName) {
  document.getElementById("greeting").innerHTML = `Hi, ${userName}!`;
}

//onclick event for the "add task button"
const addAUserButton = document.querySelector("#getUserName");
addAUserButton.addEventListener("click", getName);

//LOOK --->CREATING CARDS
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

const formValidation = () => {
  if (addTask.value === "") {
    //check if task input is empty
    msg.textContent = "Task cannot be blank";
    console.log("failure");
    //check to see if the my task/shared task radios are empty
  } else if (
    myTaskRadio.checked === false &&
    sharedTaskRadio.checked === false
  ) {
    alert("Please select My Task or Shared Task");
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
  // store the checked status of the radio buttons
  data["panda"] = radioPanda.checked;
  data["dog"] = radioDog.checked;
  data["mongoose"] = radioMongoose.checked;
  data["myTaskRadio"] = myTaskRadio.checked;
  data["sharedRadio"] = sharedTaskRadio.checked;
  renderCards();
};
//function to check if a radio button's value is true
//if true, add corrasponding avatar to div id#
function renderAvatar() {
  let avatarImg = "";
  if (data.panda) {
    avatarImg =
      '<img src="./assets/panda.svg" class="d-inline img-fluid" id="userAvatarHere" style="max-width: 80%" alt="user image" />';
  } else if (data.dog) {
    avatarImg =
      '<img src="./assets/dog.svg" class="d-inline img-fluid" id="userAvatarHere" style="max-width: 80%" alt="user image" />';
  } else if (data.mongoose) {
    avatarImg =
      '<img src="./assets/mongoose.svg" class="d-inline img-fluid" id="userAvatarHere" style="max-width: 80%" alt="user image" />';
  }
  return avatarImg;
}

//determine if post is selected My Task or Shared Tasks, then render correctly
function renderCards() {
  let cardLocation;
  //let label = "";
  if (data.myTaskRadio) {
    cardLocation = myTaskLocation;
    //label = "MY TASKS";
    clearPost();
  } else if (data.sharedRadio) {
    cardLocation = shareTaskLocation;
    //label = "SHARED TASKS";
    clearPost();
  }

  if (cardLocation) {
    const postTemplate = `
    <div id="posts" class="card mb-1 rounded-5 border-0" style="max-width: 610px;">
      <div class="row g-0 pt-0">
        <div id="userAvatarHere" class="col-md-2 pt-3 ps-2">
          ${renderAvatar()}
        </div>
  
        <div class="col-md-10">
          <div class="card-body text-start pt-3">
            <div class="card-text" id="cardTask">
              ${data.task}
            </div>
            <div class="card-text" id="cardComment">
              ${data.comment}
            </div>
          </div>
          <div class="card-body text-end pb-3">
            <div class="d-inline pe-5" id="cardDate">${data.date}</div>
            <div class="d-inline pe-2">
              <img onClick='editPost(this)'
                  class="actions-icon-bootstrap"
                  src="assets/edit.svg"
                  alt="edit"
                  style="max-width: 5.2%"
              />
            </div>
  
            <div class="d-inline pe-2">
              <img onClick='taskDone(this)'
                  class="actions-icon-bootstrap"
                  src="assets/checkmark.svg"
                  alt="checkbox"
                  style="max-width: 5.7%"
              />
            </div>
  
            <div class="d-inline pe-4">
              <img onClick='deletePost(this)'
                  class="actions-icon-bootstrap"
                  src="assets/x.svg"
                  alt="x"
                  style="max-width: 4.7%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  `;

    cardLocation.innerHTML += postTemplate;
  }
}

const clearPost = () => {
  addTask.value = "";
  taskDueDate.value = "";
  addComments.value = "";
  myTaskRadio.checked = false;
  sharedTaskRadio.checked = false;
  radioPanda.checked = false;
  radioDog.checked = false;
  radioMongoose.checked = false;
};

//DELETE POST BY CLICKING ICON
const deletePost = (e) => {
  e.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
};

//EDIT POST BY CLICKING ON ICON - //return value in card back to the forms to be edited
let editPost = (e) => {
  let taskText =
    e.parentElement.parentElement.previousElementSibling.firstElementChild;
  let taskDate = e.parentElement.previousElementSibling;
  let taskComments =
    e.parentElement.parentElement.previousElementSibling.lastElementChild;

  //have to do the same for the radio buttons - return value to the correct radio buttons on edit.
  //do I select the general container or the ids?

  // //push the values in the cards back to the input fields. There was weird space so I trimmed it.
  addTask.value = taskText.innerHTML.trim();
  taskDueDate.value = taskDate.innerHTML;
  addComments.value = taskComments.innerHTML.trim();

  //radio buttons

  //deletes old card
  e.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
};

//MARK TASK AS DONE
//task and comment are children of a common parent, so use querySElectorAll to select all the children and loop through them.
let taskDone = (e) => {
  let parent = e.parentElement.parentElement.previousElementSibling;
  let children = parent.querySelectorAll("*");
  for (let child of children) {
    child.classList.toggle("crossed-out");
  }
};

// // Get the modal
// const modal = document.querySelector("#myModalContact");
// // Get the modalAbout
// const modalA = document.getElementById("myModalAbout");

// // Get the button that opens the modal
// const modalBtn = document.querySelector("#myBtn");
// const about = document.getElementById("about");

// // Get the <span> element that closes the modal
// const closeBtn = document.querySelector(".close");
// const spanAbout = document.getElementsByClassName("closeAbout")[0];

// // When the user clicks on the button, open the modal
// modalBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);
// window.addEventListener("click", outsideClick);

// function openModal() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// function closeModal() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// function outsideClick(e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// }
// // When the user clicks on the button, open the modal
// about.onclick = function() {
//   modalA.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanAbout.onclick = function() {
//   modalA.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventAbout) {
//   if (eventAbout.target == modalA) {
//     modalA.style.display = "none";
//   }
// }
