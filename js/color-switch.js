const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const min = 0;
const max = colors.length;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let switchId = null;
let isActive = false;

const startSwitchColor = () => {
  if (isActive) return;

  isActive = true;

  switchId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(min, max)];
    refs.body.style.backgroundColor = randomColor;
  }, 1000);
};

const stopSwitchColor = () => {
  clearInterval(switchId);
  isActive = false;
  refs.body.removeAttribute('style');
};

refs.startBtn.addEventListener('click', startSwitchColor);
refs.stopBtn.addEventListener('click', stopSwitchColor);
