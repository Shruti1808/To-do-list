var Task= function(taskName, details) {
  this.taskName = taskName;
  this.details = details;
  this.urgent = false;
  this.taskComplete = false;
}

var remakeH2 = function(parentId) {
  var title = document.createElement('h2');
  title.innerHTML = "Finished!";
  parentId.prepend(title);
}

var makeTask = function(task) {
  var newDiv = document.createElement('div');
  var title = document.createElement('h3');
  var details = document.createElement('p');
  var doneButton = document.createElement('button');
  var priorityButton = document.createElement('button');
  var undoButton = document.createElement('button');
  newDiv.className = "task-container todo";
  title.className = "task-name";
  details.className = "task-details";
  doneButton.className = "btn btn-success done-button";
  doneButton.innerHTML = "Done!";
  priorityButton.className = "btn btn-danger priority-button";
  priorityButton.innerHTML = "Toggle Priority";
  undoButton.className = "btn btn-info undo-button";
  undoButton.innerHTML = "Undo";
  document.getElementById("to-do-list").append(newDiv);
  newDiv.append(title);
  newDiv.append(details);
  newDiv.append(doneButton);
  newDiv.append(priorityButton);
  newDiv.append(undoButton);
  newDiv.childNodes[0].append(task.taskName);
  newDiv.childNodes[1].append(task.details);
  console.log(document.getElementById("to-do-list"));
}

$(document).ready(function(){
  $(".reset").click(function() {
    $('#done-list').empty();
    remakeH2($("#done-list"));
  });

  $("#create-list").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedTaskDetails = $("input#details").val();

    var newTask = new Task(inputtedTask, inputtedTaskDetails);
    makeTask(newTask);

    $(".done-button").off().click(function(){
      $("#done-list").append($(this).parent());
      $(this).hide();
      $(this).next().hide();
      $(this).next().next().show();
    })

    $(".undo-button").off().click(function(){
      $("#to-do-list").append($(this).parent());
      $(this).hide();
      $(this).prev().show();
      $(this).prev().prev().show();
    })

    $(".priority-button").off().click(function(){
      if ($(this).parent().hasClass("bg-danger") === true) {
        console.log("true!");
        $("#to-do-list").append($(this).parent());
        $(this).parent().removeClass("bg-danger");
      } else {
        $("#to-do-list").prepend($(this).parent());
        $(this).parent().addClass("bg-danger");
      }
    })

  });



});
