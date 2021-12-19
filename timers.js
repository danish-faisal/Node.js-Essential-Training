const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} second(s)`);
}

console.log(`setting a ${waitTime / 1000} second(s) delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);