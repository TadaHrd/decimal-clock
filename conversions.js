function getAllDaySeconds(date, milliseconds = true) {
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + (date.getMilliseconds() / 1000 * milliseconds)
}

function normalSecondsToDecimalTime(allDaySeconds) {
    let allDayDecimalSeconds = allDaySeconds * 25/27;
    let allDayDecimalSecondsRounded = Math.floor(allDaySeconds * 25/27);

    let dayDecimalMilliseconds = Math.round(allDayDecimalSeconds % 1 * 1000);
    let dayDecimalSeconds      = allDayDecimalSecondsRounded % 100;
    let dayDecimalMinutes      = Math.floor(allDayDecimalSecondsRounded / 100 % 100);
    let dayDecimalHours        = Math.floor(allDayDecimalSecondsRounded / 10000 % 10000);

    return {
        milliseconds: dayDecimalMilliseconds,
        seconds: dayDecimalSeconds,
        minutes: dayDecimalMinutes,
        hours: dayDecimalHours,
    };
}

function decimalSecondsToNormalTime(allDecimalDaySeconds) {
    let allDaySeconds = allDecimalDaySeconds * 27/25;
    let allDaySecondsRounded = Math.floor(allDecimalDaySeconds * 27/25);

    if (allDaySeconds % 1 > 0.999) {
        allDaySeconds = Math.ceil(allDaySeconds);
        allDaySecondsRounded = allDaySeconds;
    }

    let dayMilliseconds = Math.round(allDaySeconds % 1 * 1000);
    let daySeconds      = allDaySecondsRounded % 60;
    let dayMinutes      = Math.floor(allDaySecondsRounded / 60 % 60);
    let dayHours        = Math.floor(allDaySecondsRounded / 3600 % 3600);

    return {
        milliseconds: dayMilliseconds,
        seconds: daySeconds,
        minutes: dayMinutes,
        hours: dayHours,
    };
}

function decimalTimeToDecimalSeconds(decimalTime) {
    return decimalTime.hours * 10000 + decimalTime.minutes * 100 + decimalTime.seconds + decimalTime.milliseconds / 1000;
}

function normalTimestampToDecimalTimestamp(timestamp, hasMilliseconds = false) {
    if (hasMilliseconds) {
        return Math.round(timestamp * 27000/25);
    } else {
        return Math.round(timestamp * 27/25);
    }
}

function decimalTimestampToNormalTimestamp(timestamp, hasMilliseconds = false) {
    if (hasMilliseconds) {
        return Math.round(timestamp * 25000/27);
    } else {
        return Math.round(timestamp * 25/27);
    }
}