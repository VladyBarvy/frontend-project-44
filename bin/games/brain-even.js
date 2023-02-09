#!/usr/bin/env node
/* eslint-disable */
import { whatIsYourName, questionOfGame, brainEvenGame } from '/home/barvv/workout/frontend-project-44/src/index.js';
/* eslint-enable */

let nameOfGamer = whatIsYourName();
questionOfGame("brainEven");
brainEvenGame(nameOfGamer);
