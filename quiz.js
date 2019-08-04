const process = require('process');

const questions = [
  'what is 2 + 2?',
  'how many sides does an octagon have?'
]

const correctAnswers = [
  '4',
  '8'
]

let usersAnswers = [];

function askQuestions(num){
  process.stdout.write(`${questions[num]}`);
  process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
  });
}
askQuestions(0);


// process.stdout.write(`\n\nwhat is 2 + 2\n\n`);
// process.stdin.on('data', function(answer){
//   console.log(answer.toString());
//   let inputAnswer = answer.toString().trim();
//   if (inputAnswer === '4') {
//     process.exit();
//   } else{
//     process.stdout.write(`\nwrong answer, please try again\n`);
//   }
//
//
// })
//
// process.on('exit', function() {
//   process.stdout.write(`\nwell done, you got the right answer\n`);
// })
