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
    //variable to store current hour
    let hourCurrent = moment().hour();

    for (var i = 0; i < tasks.length; i++) {
        var hourEl = tasks[i];
        console.log(hourEl[i]);
    }
    
    // $(".task-info").each( function() {
    //     var hourEl = parseInt($(this).attr("id"));

    //     // checks for past, present, and future
    //     if ( hourEl < hourCurrent ) {
    //         $(this).removeClass(["present", "future"]).addClass("past");
    //     }
    //     else if ( hourEl === hourCurrent ) {
    //         $(this).removeClass(["past", "future"]).addClass("present");
    //     }
    //     else {
    //         $(this).removeClass(["past", "present"]).addClass("future");
    //     }
    // })

};