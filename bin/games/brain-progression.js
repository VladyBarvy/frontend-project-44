#!/usr/bin/env node
/* eslint-disable */
import { whatIsYourName, questionOfGame, brainProgressionGame } from '/home/barvv/workout/frontend-project-44/src/index.js';
/* eslint-enable */

let nameOfGamer = whatIsYourName();
questionOfGame("brainProgression");
brainProgressionGame(nameOfGamer);
