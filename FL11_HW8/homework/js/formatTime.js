function formatTime(minutes) {
    let days;
    let hours;
    let min;

    days = Math.floor(minutes / 1440);
    hours = Math.floor((minutes / 60) % 24);
    min = Math.floor(minutes % 60);
    
    return days + ' day(s) ' + hours + ' hour(s) ' + min + ' minute(s)'
}