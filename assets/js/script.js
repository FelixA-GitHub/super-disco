var containerEl = document.querySelector('.container');
var headerDateEl = document.querySelector('.jumbotron');
var todayEl = document.querySelector('#currentDay');
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

//get text area class of text
var textEl = document.getElementsByClassName('text').value;
var taskEl = document.getElementsByClassName('task-info').value;


const tasks = {
    taskEl: taskEl,
    textEl: textEl
}

//variable to set tasks to localStorage
var setTasks = function() {
    var key = document.getElementById('key').value;
    //add tasks info to localStorage
    localStorage.setItem(key, JSON.stringify(tasks));
}

var getTasks = function() {
    //load the tasks from localStorage and create tasks in the correct row
    var loadedTasks = JSON.parse(localStorage.getItem(tasks));
    if (loadedTasks) {
        tasks = loadedTasks;
    }

    // make sure the past/current/future time is reflected
    timeCheck();
};

//gets current date and displays it in header area
getTodayDate = function() {
    //variable to store the date format preference
    let todayFormatEl = moment().format('dddd, MMMM Do');
    // variable to create p element to store the date
    var date = document.createElement("p");
    //displays todayFormatEl as viewable text
    date.textContent = todayFormatEl;
    //appends date format preference to current day id in html
    todayEl.append(todayFormatEl);
    //appends above to the header section of the html, where we wanted to see it
    headerDateEl.append(todayEl);

};
getTodayDate();

//function that checks each row and compares row id and current hour
timeCheck = function() {
   //each row made into array and for each row we create a string of row id and row hour parsed into an int
    Array.from(rows).forEach(row => {
        let
          rowIdString = row.id,
          rowHour;
        if (rowIdString) {
          rowHour = parseInt(rowIdString);
        }
        if (rowHour) {
          // compares the row id to current hour and sets color accordingly
          if (currentHour === rowHour) {
            setColor(row, "red");
          } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "limegreen");
          } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
          } else {
            setColor(row, "lightgrey");
          }
        }
    });

};

timeCheck();

//function to set color time block
function setColor(element, color) {
    element.style.backgroundColor = color;
}


//event handlers
//click pulls data from textarea and triggers setTasks function