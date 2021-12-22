const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// can also move files using rename

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) throw err;
});

// delete files
setTimeout(() => {
    fs.unlinkSync("./storage-files/notes.md");
}, 4000);