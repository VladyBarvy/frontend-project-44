import readlineSync from 'readline-sync';

const brainEvenGame = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
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
            console.log("Let's try again, " + userName + '!');
        }
        if ((randomNumber % 2 != 0) && (userAnswer === 'no')) {
            console.log('Correct!');
            numberOfGoodAnswer += 1;
        }
        if ((randomNumber % 2 != 0) && (userAnswer === 'yes')) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, " + userName + '!');
        }
        if ((userAnswer != 'yes') && (userAnswer != 'no')) {
            console.log("Wrong answer ;(.");
            console.log("Let's try again, " + userName + '!');
        }
    }
    if (numberOfGoodAnswer === 3) {
        console.log("Congratulations, " + userName + '!');
    }
};

export { brainEvenGame };
