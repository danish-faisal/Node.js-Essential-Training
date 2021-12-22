const fs = require("fs");

// rename directory
fs.renameSync("./temp-files", "./temp");

// delete files in directory - as directory with files can't be deleted

fs.readdirSync("./temp").forEach(fileName => {
    fs.unlinkSync(`./temp/${fileName}`);
});

// delete the directory
fs.rmdir("./temp", (err) => {
    if (err) {
        throw err;
    }
    console.log("temp directory removed");
});