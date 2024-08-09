let startTime = 0;
let endTime = 0;
let running = false;
let intervalId = 0;

const display = document.querySelector('.display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        intervalId = setInterval(updateDisplay, 10);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        endTime = new Date().getTime();
        clearInterval(intervalId);
        running = false;
    }
}

function resetStopwatch() {
    startTime = 0;
    endTime = 0;
    running = false;
    clearInterval(intervalId);
    updateDisplay();
}

function updateDisplay() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
    display.innerHTML = `
        <span id="hours">${pad(hours)}</span>:
        <span id="minutes">${pad(minutes)}</span>:
        <span id="seconds">${pad(seconds)}</span>:
        <span id="milliseconds">${pad(milliseconds, 3)}</span>
    `;
}

function pad(number, length = 2) {
    return String(number).padStart(length, '0');
}