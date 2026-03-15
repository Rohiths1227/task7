function reminder() {
    console.log("Take a short break");
}

let intervalId = setInterval(reminder, 5000);

setTimeout(function () {
    clearInterval(intervalId);
    console.log("Reminder stopped");
}, 20000);