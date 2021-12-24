const cp = require("child_process");

cp.exec("start https://www.linkedin.com/learning");

cp.exec("node readStream", (err, data) => {
    console.log(data);
});

cp.exec("dir", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

cp.exec("lst", (err, data, stderr) => {
    console.log(stderr);
    if (err) {
        throw err;
    }
});