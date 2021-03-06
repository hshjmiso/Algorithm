// A+B - 5
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let answer = '';
    let i = 0;
    while(input[i] !== '0 0') {
        const [A, B] = input[i].split(' ');
        answer += `${+A + +B}\n`;
        i++;
    }
    console.log(answer);
    process.exit();
});