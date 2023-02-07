import readlineSync from 'readline-sync';
const whatIsYourName = () => {
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};

export { whatIsYourName };