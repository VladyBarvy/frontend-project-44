import readlineSync from 'readline-sync';

const whatIsYourName = () => {
    console.log("Welcome to the Brain Games!");
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};



const questionOfGame = (nameOfTheGame) => {
    if (nameOfTheGame === "brainEven") {
        console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    }

    if (nameOfTheGame === "brainCalc") {
        console.log("What is the result of the expression?");
    }

    if (nameOfTheGame === "brainGcd") {
        console.log("Find the greatest common divisor of given numbers.");
    }

    if (nameOfTheGame === "brainProgression") {
        console.log("What number is missing in the progression?");
    }

    if (nameOfTheGame === "brainPrime") {
        console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
    }
};



const brainEvenGame = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;
    for (let i = 0; i < 3; i += 1) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log('Question: ' + randomNumber);
        let userAnswer = readlineSync.question('Your answer: ');
        if ((randomNumber % 2 === 0) && (userAnswer === 'yes')) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        }
        if ((randomNumber % 2 === 0) && (userAnswer === 'no')) {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log("Let's try again, " + nameOfGamer + '!');
        }
        if ((randomNumber % 2 != 0) && (userAnswer === 'no')) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        }
        if ((randomNumber % 2 != 0) && (userAnswer === 'yes')) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, " + nameOfGamer + '!');
        }
        if ((userAnswer != 'yes') && (userAnswer != 'no')) {
            console.log("Wrong answer ;(.");
            console.log("Let's try again, " + nameOfGamer + '!');
        }
    }
    if (numberOfGoodAnswer === 3) {
        console.log("Congratulations, " + nameOfGamer + '!');
    }
};



const brainCalcGame = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;
  
    for (let i = 0; i < 3; i += 1) {
        let resultOfExpression = 0; 
        let randomNumber1 = Math.floor(Math.random() * 100) + 1;
        let randomNumber2 = Math.floor(Math.random() * 100) + 1;
        let typeOfOperation = Math.floor(Math.random() * 100) + 1;
    
        if (typeOfOperation < 33) {
            console.log('Question: ' + randomNumber1 + '+' + randomNumber2);
            resultOfExpression = randomNumber1 + randomNumber2;
        }

        if ((typeOfOperation >= 33) && (typeOfOperation < 66)) {
            console.log('Question: ' + randomNumber1 + '-' + randomNumber2);
            resultOfExpression = randomNumber1 - randomNumber2;
        }

        if ((typeOfOperation >= 66) && (typeOfOperation <= 100)) {
            console.log('Question: ' + randomNumber1 + '*' + randomNumber2);
            resultOfExpression = randomNumber1 * randomNumber2;
        }

        let userAnswer = readlineSync.question('Your answer: ');

        if (parseInt (userAnswer) === resultOfExpression) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        } else {
            console.log('"' + userAnswer + '"' + " is wrong answer ;(. Correct answer was " + '"' + resultOfExpression + '"' + '.');
            console.log("Let's try again, " + nameOfGamer + '!');
        }
        
    }

    if (numberOfGoodAnswer === 3) {
        console.log("Congratulations, " + nameOfGamer + '!');
    }
};




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


const brainGcdGame = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;

    for (let i = 0; i < 3; i += 1) {
        let resultOfExpression = 0; 
        let randomNumber1 = Math.floor(Math.random() * 100) + 1;
        let randomNumber2 = Math.floor(Math.random() * 100) + 1;

        console.log('Question: ' + randomNumber1 + ' ' + randomNumber2);
        resultOfExpression = euclidAlgorithm(randomNumber1, randomNumber2);

        let userAnswer = readlineSync.question('Your answer: ');

        if (parseInt (userAnswer) === resultOfExpression) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        } else {
            console.log('"' + userAnswer + '"' + " is wrong answer ;(. Correct answer was " + '"' + resultOfExpression + '"' + '.');
            console.log("Let's try again, " + nameOfGamer + '!');
        }

    }

    if (numberOfGoodAnswer === 3) {
        console.log("Congratulations, " + nameOfGamer + '!');
    }

};



const brainProgressionGame = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;
    

    for (let i = 0; i < 3; i += 1) {
        let arithmeticProgression = 0;
        let arithmProgressString;
        let arithmProgressionMassive = [];
        let controlHiddenElement = 0;
        let startNumberOfProgress = Math.floor(Math.random() * (20 - 2) + 2);
        let stepOfProgress = Math.floor(Math.random() * (10 - 2) + 2);
        let hiddenElement = Math.floor(Math.random() * (9 - 1) + 1);

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

        console.log('Question: ' + arithmProgressString);
        let userAnswer = readlineSync.question('Your answer: ');

        if (parseInt (userAnswer) === controlHiddenElement) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        } else {
            console.log('"' + userAnswer + '"' + " is wrong answer ;(. Correct answer was " + '"' + controlHiddenElement + '"' + '.');
            console.log("Let's try again, " + nameOfGamer + '!');
        }
    }

    if (numberOfGoodAnswer === 3) {
        console.log("Congratulations, " + nameOfGamer + '!');
    }
};


const brainPrimeGame = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;

    for (let a = 0; a < 3; a += 1) {
        let randomNumber = Math.floor(Math.random() * (100 - 2) + 2);
        let flagPrime = true;

        // проверка: является ли случайно сгенерированное число простым
        for (let i = 2; i <= randomNumber - 1; i += 1) {
            if (randomNumber % i === 0) {
                flagPrime = false;
                break;
            }
        }

        console.log('Question: ' + randomNumber);
        let userAnswer = readlineSync.question('Your answer: ');

        if ((userAnswer === 'yes') && (flagPrime === true)) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        } 
        
        if ((userAnswer === 'no') && (flagPrime === true)) {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log("Let's try again, " + nameOfGamer + '!');
        } 

        if ((userAnswer === 'yes') && (flagPrime === false)) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, " + nameOfGamer + '!');
        } 

        if ((userAnswer === 'no') && (flagPrime === false)) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        } 

    }

    if (numberOfGoodAnswer === 3) {
        console.log("Congratulations, " + nameOfGamer + '!');
    }

};

export { whatIsYourName, questionOfGame, brainCalcGame, brainEvenGame, brainGcdGame, brainProgressionGame, brainPrimeGame };
