import { getRandomNumber, generalGame } from '../index.js';

// Игра "Простое ли число?"
const rules = 'Answer "yes" if given number is Prime. Otherwise answer "no".';

const getPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// вопрос-ответ
const getQuestionAnswer = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = getPrimeNum(number) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrime = () => generalGame(rules, getQuestionAnswer);

export default brainPrime;
