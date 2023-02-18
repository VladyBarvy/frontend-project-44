import { whatIsYourName } from '../cli.js';
import { randomNumber, question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('What number is missing in the progression?');

/*
const brainProgressionGame = (step = randomNumber()) => {
  const startNumber = randomNumber();
  let nextNumber = startNumber;
  const mas = [];
  for (let i = 0; i < 10; i += 1) {
    nextNumber += step;
    mas.push(nextNumber);
  }
  const index = Math.floor(Math.random() * mas.length);
  const hiddenNumber = mas[index];
  mas[index] = '..';
  question(mas.join(' '));
  checkingAnswers(brainProgressionGame, userName, hiddenNumber);
};
*/

const brainProgressionGame = () => {
  const maxOfStart = 20;
  const minOfStart = 2;
  const maxOfStep = 10;
  const minOfStep = 2;
  const maxOfHiddenElement = 9;
  const minOfHiddenElement = 1;

  let arithmeticProgression = 0;
  let arithmProgressString;
  let arithmProgressionMassive = [];
  let controlHiddenElement = 0;

  let startNumberOfProgress = Math.floor(Math.random() * (maxOfStart - minOfStart) + minOfStart);
  let stepOfProgress = Math.floor(Math.random() * (maxOfStep - minOfStep) + minOfStep);
  let hiddenElement = Math.floor(Math.random() * (maxOfHiddenElement - minOfHiddenElement) + minOfHiddenElement);

  arithmeticProgression = startNumberOfProgress; 
  arithmProgressString = arithmeticProgression;

  for (let i = 0; i < 9; i += 1) {
    arithmeticProgression = arithmeticProgression + stepOfProgress;
    arithmProgressionMassive.push(arithmeticProgression);  
  }

  controlHiddenElement = arithmProgressionMassive[hiddenElement];
  arithmProgressionMassive[hiddenElement] = '..';

  for (let a = 0; a < 9; a += 1) {
  arithmProgressString = arithmProgressString + ' ' + arithmProgressionMassive[a];
  }

  question(arithmProgressString);

  checkingAnswers(brainProgressionGame, userName, controlHiddenElement);
};


export { brainProgressionGame };
