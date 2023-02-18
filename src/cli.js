import readlineSync from 'readline-sync';

const whatIsYourName = () => {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName;
};
export { whatIsYourName };