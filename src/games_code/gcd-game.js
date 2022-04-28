import { getRandomNumber, generalGame } from '../index.js';

// Игра НОД
const rules = 'Find the greatest common divisor of given numbers.';

// Наибольший общий делитель
const greatComDiv = (x, y) => {
  if (y === 0) {
    return x;
  }
  return greatComDiv(y, x % y);
};

const getQuestionAnswer = () => {
  const newNum1 = getRandomNumber(1, 111);
  const newNum2 = getRandomNumber(1, 111);
  const question = `${newNum1} ${newNum2}`;

  const answer = String(greatComDiv(newNum1, newNum2));
  return [question, answer];
};

const brainGcd = () => generalGame(rules, getQuestionAnswer);

export default brainGcd;
