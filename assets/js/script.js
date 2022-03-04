// var headerDateEl = document.querySelector('.jumbotron');
// var todayEl = document.querySelector('#currentDay');

// getTodayDate = function() {
    
//     var todayFormatEl = moment().format('dddd, MMMM Do');
//     var date = document.createElement("span");
//     date.textContent = todayFormatEl;
    
//     todayEl.append(todayFormatEl);
//     headerDateEl.append(todayEl);

// };
// getTodayDate();

let d = new Date();
let options = {
    weekday: 'long', 
    month: 'long',
    day: 'numeric'
};

console.log(Date.toLocaleTimeString('en-us', options));


