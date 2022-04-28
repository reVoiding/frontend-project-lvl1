import { getRandomNumber, generalGame } from '../index.js';

// Чётность
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const evenGame = () => generalGame(rules, getQuestionAnswer);

export default evenGame;
