function getInputValueById(id) {
    const value = document.getElementById(id).value;
    return parseInt(value);
}

function getInnerTextValueById(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

function getDateTime() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes; // Pad single digit minutes
    seconds = seconds < 10 ? '0' + seconds : seconds; // Pad single digit seconds

    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;

    return date + ' ' + time;
}