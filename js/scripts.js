$(document).ready(function(){
  $("form#create-list").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("form#task").val();
    console.log(inputtedTask);

 })



})
