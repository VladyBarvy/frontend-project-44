import whatIsYourName from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('What is the result of the expression?');

const randomOperation = () => {
  const operatStyle = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * operatStyle.length);
  return operatStyle[operation];
};

const brainCalcGame = (a = randomNumber(), b = randomNumber(), typeOfOper = randomOperation()) => {
  question(`${a} ${typeOfOper} ${b}`);
  let correctAnswer = 0;
  switch (typeOfOper) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default:
  }
  checkingAnswers(brainCalcGame, userName, correctAnswer);
};

export default brainCalcGame;
