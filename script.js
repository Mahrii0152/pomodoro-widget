let workTime = 25 * 60; // seconds
let breakTime = 5 * 60;
let timeLeft = workTime;
let running = false;
let intervalId = null;

const timeEl = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(sec){
  const m = Math.floor(sec/60);
  const s = sec % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateDisplay(){
  timeEl.textContent = formatTime(timeLeft);
}

function tick(){
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    clearInterval(intervalId);
    running = false;
    timeLeft = (timeLeft === 0 && timeEl.textContent === '25:00') ? breakTime : workTime;
    updateDisplay();
    startTimer();
  }
}

function startTimer(){
  if (running) return;
  running = true;
  intervalId = setInterval(tick, 1000);
}

function pauseTimer(){
  running = false;
  clearInterval(intervalId);
}

function resetTimer(){
  pauseTimer();
  timeLeft = workTime;
  updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
updateDisplay();