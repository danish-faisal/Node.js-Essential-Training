const fs = require("fs");

// console.log("started reading files");
// const files = fs.readdirSync("./assets");

// console.log("completed")
// console.log(files);

fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("completed")
    console.log(files);
});

console.log("started reading files");