import whatIsYourName from '../cli.js';
import { question, checkingAnswers } from '../index.js';

const userName = whatIsYourName();
console.log('What number is missing in the progression?');

const brainProgressionGame = () => {
  const maxOfStart = 20;
  const minOfStart = 2;
  const maxOfStep = 10;
  const minOfStep = 2;
  const maxOfHidEl = 9;
  const minOfHidEl = 1;

  let arithmeticProgression = 0;
  let arithmProgressString;
  const arithmProgressionMassive = [];
  let controlHiddenElement = 0;

  const startNumberOfProgress = Math.floor(Math.random() * (maxOfStart - minOfStart) + minOfStart);
  const stepOfProgress = Math.floor(Math.random() * (maxOfStep - minOfStep) + minOfStep);
  const hiddenElement = Math.floor(Math.random() * (maxOfHidEl - minOfHidEl) + minOfHidEl);

  arithmeticProgression = startNumberOfProgress;
  arithmProgressString = arithmeticProgression;

  for (let i = 0; i < 9; i += 1) {
    arithmeticProgression += stepOfProgress;
    arithmProgressionMassive.push(arithmeticProgression);
  }

  controlHiddenElement = arithmProgressionMassive[hiddenElement];
  arithmProgressionMassive[hiddenElement] = '..';

  for (let a = 0; a < 9; a += 1) {
    arithmProgressString = `${arithmProgressString} ${arithmProgressionMassive[a]}`;
  }

  question(arithmProgressString);

  checkingAnswers(brainProgressionGame, userName, controlHiddenElement);
};

export default brainProgressionGame;
