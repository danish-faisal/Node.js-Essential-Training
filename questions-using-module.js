const collectAnswers = require("./lib/collectAnswers");

const questions = ["What is your name? ", "Where do you live? ", "What are you going to do with node js? "];

collectAnswers(questions, answers => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});

// won't break because callback-func isn't given, will run normally as default 'f=>f' is supplied to 'done' in module
// collectAnswers(questions)