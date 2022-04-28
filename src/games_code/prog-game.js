import { generalGame, getRandomNumber } from '../index.js';

// Прогрессия
const progressStart = (start, length, counter) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + counter * i);
  }
  return result;
};

// меняем элемент прогрессии
const progressNoElement = (progression, item) => {
  const newProgress = progression.slice(0);
  newProgress[item] = '..';
  return newProgress.join(' ');
};

// question - answer
const getQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progressSize = getRandomNumber(5, 10);
  const element = getRandomNumber(1, progressSize);
  // Генерим прогрессию
  const progression = progressStart(num1, progressSize, randGo);

  // Удаляем элемент - вопрос
  const question = progressNoElement(progression, randEl);

  // Получаем  ответ - спрятанный элемент
  const delElement = num1 + step * element;
  const answer = String(delElement);

  return [question, answer];
};

const rules = 'What number is missing in the progression?';

const brainProgression = () => generalGame(rules, getQuestionAnswer);

export default brainProgression;
