const waitTime = 3000;

console.log(`setting a ${waitTime / 1000} second(s) delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);