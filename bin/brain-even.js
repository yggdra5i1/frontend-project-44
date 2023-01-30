#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const correctAnswersForSuccess = 3;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberIsEven(number) {
  return number % 2 === 0;
}

for (let correctAnswers = 0; correctAnswers <= correctAnswersForSuccess;) {
  if (correctAnswers === correctAnswersForSuccess) {
    console.log(`Congratulations, ${name}!`);
    break;
  }

  const number = randomNumber(1, 100);
  const correctAnswer = numberIsEven(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
