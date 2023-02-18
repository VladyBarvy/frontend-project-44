import { whatIsYourName } from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('Find the greatest common divisor of given numbers.');

const euclidAlgorithm = (num1, num2) => {
  let resultOfCalculation = 0;
  while ((num1 != 0) && (num2 != 0)) {
      if (num1 > num2) {
          num1 = num1 % num2;
      } else {
          num2 = num2 % num1;
      }
  }
  resultOfCalculation = num1 + num2;
  return resultOfCalculation;
};

const brainGcdGame = (firstNum = randomNumber(), secondNum = randomNumber()) => {
  let a = firstNum;
  let b = secondNum;
  question(`${a} ${b}`);
  const correctAnswer = euclidAlgorithm(a, b);
  checkingAnswers(brainGcdGame, userName, correctAnswer);
};

export { brainGcdGame };
