import { getRandomNumber, generalGame } from '../index.js';

// Калькулятор
// right answer
const calc = (num1, num2, operator) => {
  switch (operator) {
    case  "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default :
      return null;
  }
};

// question-answer
const getQuestionAnswer = () => {
  const operators = ["*", "+", "-"];
  const newNum1 = getRandomNumber(1, 11);
  const newNum2 = getRandomNumber(1, 11);
  const nextOperator = operators[getRandomNumber(0, 2)];
  const question = `${newNum1} ${nextOperator} ${newNum2}`;
  const answer = String(calc(newNum1, newNum2, nextOperator));

  return [question, answer];
};

const rules = 'What is the result of the expression?';

const brainCalc = () => generalGame(rules, getQuestionAnswer);

export default brainCalc;
