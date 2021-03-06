
//variable to display the date with format preference
let todayFormatEl = moment().format('dddd, MMMM Do');
$("#currentDay").html(todayFormatEl);

  
$(document).ready(function () {  

  //variable to set current hour format
  let currentHour = moment().hour();
  //function that checks each row and compares row id and current hour
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("hour")[1];
    
    if (currentHour == timeDiv) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");  
    } 
    else if (currentHour < timeDiv) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } 
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  //click pulls data from textarea and stores it to localStorage
  $(".saveBtn").click(function (event) {
      event.preventDefault();
      //get nearby values of the task info
      var text = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem("myTime", JSON.stringify(time));
      localStorage.setItem("myText", JSON.stringify(text));
  });

  //get values from local storage
  $("#hour09 .time-block").val(localStorage.getItem("09"));
  $("#hour10 .time-block").val(localStorage.getItem("10"));
  $("#hour11 .time-block").val(localStorage.getItem("11"));
  $("#hour12 .time-block").val(localStorage.getItem("12"));
  $("#hour13 .time-block").val(localStorage.getItem("13"));
  $("#hour14 .time-block").val(localStorage.getItem("14"));
  $("#hour15 .time-block").val(localStorage.getItem("15"));
  $("#hour16 .time-block").val(localStorage.getItem("16"));
  $("#hour17 .time-block").val(localStorage.getItem("17"));

});