var Task= function(taskName, details) {
  this.taskName = taskName;
  this.details = details;
  this.urgent = false;
  this.taskComplete = false;
}

var makeTask = function(task) {
  var newDiv = document.createElement('div');
  var title = document.createElement('h2');
  var details = document.createElement('p');
  var doneButton = document.createElement('button');
  var priorityButton = document.createElement('button');
  var undoButton = document.createElement('button');
  newDiv.className = "task-container todo";
  title.className = "task-name";
  details.className = "task-details";
  doneButton.className = "btn btn-success done-button"
  doneButton.innerHTML = "Done!"
  priorityButton.className = "btn btn-danger priority-button"
  priorityButton.innerHTML = "Mark as Urgent"
  priorityButton.setAttribute("value", false);
  undoButton.className = "btn btn-info undo-button"
  undoButton.innerHTML = "Undo"
  document.getElementById("to-do-list").append(newDiv);
  newDiv.append(title);
  newDiv.append(details);
  newDiv.append(doneButton);
  newDiv.append(priorityButton);
  newDiv.append(undoButton);
  newDiv.childNodes[0].append(task.taskName)
  newDiv.childNodes[1].append(task.details)
  console.log(document.getElementById("to-do-list"));
}


$(document).ready(function(){
  $("form#create-list").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedTaskDetails = $("input#details").val();

    var newTask = new Task(inputtedTask, inputtedTaskDetails);
    makeTask(newTask);

  $(".done-button").click(function(){
    $("#done-list").append($(this).parent());
    $(this).hide();
    $(this).next().hide();
    $(this).next().next().show();
  })

  $(".undo-button").click(function(){
    $("#to-do-list").append($(this).parent());
    $(this).hide();
    $(this).prev().show();
    $(this).prev().prev().show();
  })

  $(".priority-button").click(function(){
    $("#priority-list").append($(this).parent());
    $(this).parent().toggleClass("bg-danger");
  })

 });



});
