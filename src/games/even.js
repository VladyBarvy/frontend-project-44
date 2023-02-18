import whatIsYourName from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEvenGame = () => {
  const number = randomNumber();
  question(number);
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  checkingAnswers(brainEvenGame, userName, correctAnswer);
};

export default brainEvenGame;
