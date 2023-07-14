function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString =
        padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);

    document.getElementById("time").innerHTML = timeString;
}

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

// Update time every second
setInterval(updateTime, 1000);
