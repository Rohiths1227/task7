let time = 10;

let timer = setInterval(function () {

    console.log(time);
    time--;

    if (time < 0) {
        clearInterval(timer);
        console.log("Meeting Started");
    }

}, 1000);