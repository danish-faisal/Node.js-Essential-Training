const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    // console.log(`waiting ${currentTime / 1000} second(s)`);
    process.stdout.write(`waiting ... ${p}%`);
}

console.log(`setting a ${waitTime / 1000} second(s) delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);