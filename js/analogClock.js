let date = new Date;

let secondsHand = document.querySelector("#clockSecondHand");
let minutesHand = document.querySelector("#clockMinuteHand");
let hoursHand = document.querySelector("#clockHourHand");

setInterval(setTime, 1350/25);

function setTime() {
    date = new Date;

    let time = normalSecondsToDecimalTime(getAllDaySeconds(date, true));

    secondsHand.setAttribute("transform", `rotate(${time.secondsMilliseconds * 3.6 - 61 /* default rotation of hand */} 50 50)`);
    minutesHand.setAttribute("transform", `rotate(${time.minutes * 3.6 - 34 /* default rotation of hand */} 50 50)`);
    hoursHand.setAttribute("transform", `rotate(${time.hours * 45 - 14 /* default rotation of hand */} 50 50)`);
}
