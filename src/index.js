import readlinesSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
export const userName = readlinesSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);

export const even = () => {
  const iter = (count) => {
    if (count <= 3) {
      const anyNumber = Math.round(Math.random() * 100 + 1);
      console.log(`Question: ${anyNumber}`);
      const rightAnswer = (num) => {
        const result = (num % 2 === 0) ? 'yes' : 'no';
        return result;
      };
      const answerUser = readlinesSync.question('Your answer: ');
      if (answerUser === rightAnswer(anyNumber)) {
        console.log('Correct!');
        return iter(count + 1);
      }
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer(anyNumber)}'.\nLet's try again, ${userName}!`);
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  return iter(1);
};
