import whatIsYourName from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('Find the greatest common divisor of given numbers.');

const euclidAlgorithm = (num1, num2) => {
  let resultOfCalculation = 0;
  let workingNum1 = num1;
  let workingNum2 = num2;
  while ((workingNum1 !== 0) && (workingNum2 !== 0)) {
    if (workingNum1 > workingNum2) {
      workingNum1 %= workingNum2;
    } else {
      workingNum2 %= workingNum1;
    }
  }
  resultOfCalculation = workingNum1 + workingNum2;
  return resultOfCalculation;
};

const brainGcdGame = (firstNum = randomNumber(), secondNum = randomNumber()) => {
  const a = firstNum;
  const b = secondNum;
  question(`${a} ${b}`);
  const correctAnswer = euclidAlgorithm(a, b);
  checkingAnswers(brainGcdGame, userName, correctAnswer);
};

export default brainGcdGame;
