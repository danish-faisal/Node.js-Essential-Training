const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions-using-module.js"]);

questionApp.stdin.write("Danish \n");
questionApp.stdin.write("Hyderabad \n");
questionApp.stdin.write("Build Apps \n");

questionApp.stdout.on("data", (data) => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log("questionApp process exited");
});