import { whatIsYourName } from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrimeGame = () => {
  let number = randomNumber();
  question(number);
  let correctAnswer = '';
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
  } else {
    correctAnswer = 'no';
  }
  checkingAnswers(brainPrimeGame, userName, correctAnswer);
};

export { brainPrimeGame };
