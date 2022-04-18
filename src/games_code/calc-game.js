import { randNum, generalGame } from '../index.js';

// Калькулятор
// right answer
const calc = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

// question-answer
const questionAnswer = () => {
  const operators = ["*", "+", "-"];
  const newNum1 = randNum(1, 11);
  const newNum2 = randNum(1, 11);
  const nextOperator = operators[randNum(0, 3)];
  const question = `${newNum1} ${nextOperator} ${newNum2}`;
  const answer = String(calc(newNum1, newNum2, nextOperator));

  return [question, answer];
};

const rules = 'What is the result of the expression?';

const brainCalc = () => generalGame(rules, questionAnswer);

export default brainCalc;
