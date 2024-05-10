let date = new Date;

let timeDisplay = document.querySelector("#time");
let timeDisplayMilliseconds = document.querySelector("#timeMilliseconds");

setInterval(setTime, 25);

function setTime() {
    date = new Date;

    let time = normalSecondsToDecimalTime(getAllDaySeconds(date, true));

    timeDisplay.innerHTML = time.hours + ":" + time.minutes.toString().padStart("2", "0") + ":" + time.seconds.toString().padStart("2", "0");
    timeDisplayMilliseconds.innerHTML = "." + time.milliseconds.toString().padStart("3", "0");
}