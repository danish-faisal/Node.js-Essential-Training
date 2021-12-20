const fs = require("fs");

// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

// console.log(text);

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        console.log(`An error has occurred: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
});

fs.readFile("./assets/alex.jpg", (err, img) => {
    if (err) {
        console.log(`An error has occurred: ${err.message}`);
        process.exit();
    }
    console.log(img);
});