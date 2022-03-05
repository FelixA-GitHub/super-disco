var headerDateEl = document.querySelector('.jumbotron');
var todayEl = document.querySelector('#currentDay');
var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};


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

timeCheck = function() {
    const rows = document.getElementsByClassName("row");
    let currentHour = parseInt(moment().format('H'));

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
            setColor(row, "limegreen");
          }
        }
    });

};

timeCheck();

//function to set color time block
function setColor(element, color) {
    element.style.backgroundColor = color;
}


  