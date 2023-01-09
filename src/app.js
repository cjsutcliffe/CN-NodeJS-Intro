const yargs = require('yargs');

const input = yargs.argv;

if (input.actor) {
    console.log(`it's ${input.actor}`);
};

console.log(input);