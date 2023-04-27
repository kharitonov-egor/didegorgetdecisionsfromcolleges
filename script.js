/*
 * Basic Count Up from Date and Time
 * Author: @mrwigster / https://guwii.com/bytes/count-date-time-javascript/
 */
/*
window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Feb 6, 2023 13:13:00 GMT-0500 (Eastern Standard Time)", 'countup1'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24, secondsInAHour = 60 * 60 * 1000;
    var secondsInAWeek = 604800;

    //months = Math.floor((timeDifference / (secondsInADay) * 1) / 29);
    weeks = Math.floor((timeDifference / (secondsInADay) * 1) / 7);
    days = Math.floor(timeDifference / (secondsInADay) * 1 % 7);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    //idEl.getElementsByClassName('months')[0].innerHTML = months;
    idEl.getElementsByClassName('weeks')[0].innerHTML = weeks;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}

const fireDiv = document.querySelector('.fireworksDiv');
const fireworks = new Fireworks(fireDiv,{
  delay: {min: 90, max:120},
  trace: 3,
  particles: 25,
  acceleration: 1,
  gravity: 0.05,
  hue: {
    min: 147,
    max: 167
  },
})
*/
//fireworks.start();