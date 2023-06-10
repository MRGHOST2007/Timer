const textBoxInput = document.querySelector(".textBoxInput");
textBoxInput.setAttribute("placeHolder",
    "Enter Pattern Text Here :");

const timerText = document.querySelector("#timer");
const patternText = document.querySelector(".patternText").innerHTML;

var timer = [0, 0, 0, 0];
var isTimerRunning = false;
var interval;

function runTimer() {
    let currentTime = loadZero(timer[0]) + ":" + loadZero(timer[1]) + ":" + loadZero(timer[2]);
    timerText.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000))
}


function start() {
    let lenght = textBoxInput.value.length;
    console.log(lenght);

    if (lenght == 0 && !isTimerRunning) {
        interval = setInterval(runTimer, 10);
        isTimerRunning = true;
    } else {
        textBoxInput.removeEventListener("keypress", start);
    }
}

function loadZero(time) {
    if (time < 9) {
        time = "0" + time;
    }

    return time;
}

function checkText() {
    var enteredText = textBoxInput.value;
    let patternTextMatch = patternText.substring(0, enteredText.length);

    if (enteredText == patternText) {
        textBoxInput.style.backgroundColor = "green";
        clearInterval(interval);

    } else {
        if (enteredText == patternTextMatch) {
            textBoxInput.style.backgroundColor = "yellow";
        } else {
            textBoxInput.style.backgroundColor = "red";
        }
    }

}

textBoxInput.addEventListener("keypress", start);
textBoxInput.addEventListener("keyup", checkText); 