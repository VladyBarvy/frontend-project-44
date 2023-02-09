#!/usr/bin/env node
/* eslint-disable */
import { whatIsYourName, questionOfGame, brainCalcQuestion } from '/home/barvv/workout/frontend-project-44/src/index.js';
/* eslint-enable */

let nameOfGamer = whatIsYourName();
questionOfGame("brainCalc");
brainCalcQuestion(nameOfGamer);
