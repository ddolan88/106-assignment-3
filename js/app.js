const nonImpIcon = "far fa-star";
const impIcon = "fas fa-star";
var isImportant = false;
var isVisible = true;
var isHidden = true;

function saveTask() {
  console.log("Adding Task!");
  let title = $("#txtTitle").val();
  let description = $("#txtDesc").val();
  let duration = $("#txtDuration").val();
  let deadline = $("#txtDeadline").val();
  let place = $("#txtLocation").val();
  let condition = $("#txtStatus").val();

  let task = new Task(
    0,
    title,
    isImportant,
    description,
    duration,
    deadline,
    place,
    condition
  );
  console.log(task);

  // console.log(title,isImportant,duration,deadline,place,condition)
  displayTask(task);
}



function displayTask(task){
    let syntax =
     `<div class="task-display">
     <h3>${task.title}</h3>
     <label>${isImportant}</label>
     <div class="extra-info">
     <div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Info
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <label>Description:</label>
    <p>${task.description}</p>
    <label>Location:</label>
    <p>${task.location}</p>
    <label>Allotted time:</label>
    <p>${task.duration}</p>
    <label>Due:</label>
    <p>${task.deadline}</p>
    </div>
  </div>
     </div>`;
    $("#task-list").append(syntax);
}

function toggleImportant() {
  if (isImportant) {
    $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
    isImportant = true;
  }
}

function toggleForm(){
    if(isVisible){
        $("#task-form").fadeOut();
        isVisible = false;
    }else{
        $("#task-form").fadeIn();
        isVisible = true;
    }
}

// function hideEye(){
//   if(isVisible){
//     $("#task-form").removeClass("#fa-eye-slash");
//     isVisible = true;
//   }else{
//     $("#task-form").addClass("#fa-eye-slash");
//     isVisible = false;
//   }
// }
//How do I make clicking show/hide task list hide the eye slash icon?

function init() {
  console.log("task manager");

  // load data
  // runTests();
  // hook events
  $("#iImportant").click(toggleImportant);
  $("#hide-form-btn").click(toggleForm);
  $("#saveTask").click(saveTask).click(toggleForm);
}

window.onload = init;

//create a task.js and declare the class task
//link the file in html
//create a new task object in your saveTask
