const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButtonRef = document.querySelector('button[data-action="start"]');
const stopButtonRef = document.querySelector('button[data-action="stop"]');

startButtonRef.addEventListener('click', onStartClick);
stopButtonRef.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

function onStartClick() {
  startButtonRef.disabled = true;

  timerId = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }, 1000);
}

function onStopClick() {
  startButtonRef.disabled = false;
  clearInterval(timerId);
}
