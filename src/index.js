import readlineSync from 'readline-sync';

const whatIsYourName = () => {
    console.log("Welcome to the Brain Games!");
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};



const questionOfGame = (nameOfTheGame) => {
    if(nameOfTheGame === "brainEven") {
        console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    }

    if(nameOfTheGame === "brainCalc") {
        console.log("What is the result of the expression?");
    }
};



const brainCalcQuestion = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;
  
    for(let i = 0; i < 3; i += 1) {
        let resultOfExpression = 0; 
        let randomNumber1 = Math.floor(Math.random() * 100) + 1;
        let randomNumber2 = Math.floor(Math.random() * 100) + 1;
        let typeOfOperation = Math.floor(Math.random() * 100) + 1;
    
        if(typeOfOperation < 33) {
            console.log('Question: ' + randomNumber1 + '+' + randomNumber2);
            resultOfExpression = randomNumber1 + randomNumber2;
        }

        if((typeOfOperation >= 33) && (typeOfOperation < 66)) {
            console.log('Question: ' + randomNumber1 + '-' + randomNumber2);
            resultOfExpression = randomNumber1 - randomNumber2;
        }

        if((typeOfOperation >= 66) && (typeOfOperation <= 100)) {
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

const brainEvenGame = (nameOfGamer) => {
    let numberOfGoodAnswer = 0;
    for(let i = 0; i < 3; i += 1) {
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

export { whatIsYourName, questionOfGame, brainCalcQuestion, brainEvenGame };
