const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt = "";

/*
console.log("type something...")
process.stdin.on("data", data => {
    console.log(`I read ${data.length - 2} characters of text`);  // reads /r and /n as last 2 chars: so -2
});
*/

readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileTxt += data;
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("finished reading file");
    console.log(`In total I read ${fileTxt.length} characters of text`);
});