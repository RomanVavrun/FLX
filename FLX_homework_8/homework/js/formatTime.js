function formatTime(minutes) {

    let sec = minutes * 60;
    let days = Math.floor(sec / 60 / 60 / 24);
    sec -= days * 24 * 60 * 60;
    let hours = Math.floor(sec / 60 / 60);
    sec -= hours * 60 * 60;
    let min = Math.floor(sec / 60);
    alert(days + ' days, ' + hours + ' hours, ' + min + ' min.');

    return minutes;
}

formatTime(120);
formatTime(59);
formatTime(3601);
