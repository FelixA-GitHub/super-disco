var containerEl = document.querySelector('.container');
var headerDateEl = document.querySelector('.jumbotron');
var todayEl = document.querySelector('#currentDay');
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

// var tasks = {
//     "9": [],
//     "10": [],
//     "11": [],
//     "12": [],
//     "13": [],
//     "14": [],
//     "15": [],
//     "16": [],
//     "17": []
// };

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
//click pulls data from textarea and stores it to localStorage
$(".saveBtn").on("click", function () {
    //get nearby values of the task info
    var text = $(this).siblings(".task-info").val().trim();
    var time = $(this).parent().attr("id");
    var tasks = [[time, text],[time, text],[time, text],[time, text],
    [time, text],[time, text],[time, text],[time, text],[time, text],];
    var tasksJSON = JSON.stringify(tasks);

    for(var i = 0; i < tasksJSON.length; i++) {
        tasksJSON[i];
        i++;
        localStorage.setItem('tasksJSON', tasksJSON);
    }
    
});
    

//get values from local storage
var getTasks = function() {
    //load the tasks info from localStorage
   var tasksParse = JSON.parse(localStorage.getItem('tasksJSON'));
    console.log(tasksParse);

    // make sure the past/current/future time is reflected
    timeCheck();
};
getTasks();