process.stdout.write("Hello ");
process.stdout.write("World\n\n");

const questions = ["What is your name ?", "What would you rather be doing ?", "What is your preferred programming language ?"];

const ask = (i = 0) => {
    process.stdout.write(`\n\n${questions[i]}`);
    process.stdout.write(` > `);
}

ask();