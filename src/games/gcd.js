import whatIsYourName from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('Find the greatest common divisor of given numbers.');

const euclidAlgorithm = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return euclidAlgorithm(num2, num1 % num2);
};

const brainGcdGame = (firstNum = randomNumber(), secondNum = randomNumber()) => {
  const a = firstNum;
  const b = secondNum;
  question(`${a} ${b}`);
  const correctAnswer = euclidAlgorithm(a, b);
  checkingAnswers(brainGcdGame, userName, correctAnswer);
};

export default brainGcdGame;
