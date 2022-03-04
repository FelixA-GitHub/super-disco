// var headerDateEl = document.querySelector('.jumbotron');
// var todayEl = document.querySelector('#currentDay');
// const moment = require('moment');

// getTodayDate = function() {
    
//     let todayFormatEl = moment().format('dddd, MMMM Do');
//     var date = document.createElement("span");
//     date.textContent = todayFormatEl;
    
//     todayEl.append(todayFormatEl);
//     headerDateEl.append(todayEl);

// };
// getTodayDate();

// let d = new Date();
// let options = {
//     weekday: 'long', 
//     month: 'long',
//     day: 'numeric'
// };

// console.log(Date.toLocaleTimeString('en-us', options));

// var curday = function(sp){
//     today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth()+1; //As January is 0.
//     var yyyy = today.getFullYear();
    
//     if(dd<10) dd='0'+dd;
//     if(mm<10) mm='0'+mm;
//     return (mm+sp+dd+sp+yyyy);
//     };
//     console.log(curday('/'));
//     console.log(curday('-'));