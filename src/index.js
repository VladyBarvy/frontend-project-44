import readlineSync from 'readline-sync';

const userAnswer = () => {
    let answerFromGamer = readlineSync.question('Your answer: ');
    return answerFromGamer;
};

const question = (exp) => {
  console.log(`Question: ${exp}`);
};

const randomNumber = () => {
    const number = Math.floor(Math.random() * 100 + 1);
    return number;
  };

let trueAnswerCounter = 0;
const i = 3;

const checkingAnswers = (func, userName, correctAnswer) => {
    const answerOfUser = userAnswer();
    const correctAnswerTheQuastion = correctAnswer.toString();
    if (correctAnswerTheQuastion === answerOfUser) { 
      console.log('Correct!');
      trueAnswerCounter += 1;
      if (trueAnswerCounter < i) { 
        func();
      } else if (trueAnswerCounter === i) { 
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswerTheQuastion}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

export { randomNumber, question, checkingAnswers };
