import { randNum, generalGame } from '../index.js'

//Игра "Простое ли число?"
const rules = 'Answer "yes" if given number is Prime. Otherwise answer "no".'

const primeNum = (num) => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

// вопрос-ответ
const questionAnswer = () => {
  const number = randNum(1, 100)
  const question = number
  const answer = primeNum(number) ? 'yes' : 'no'
  return [question, answer]
}
const brainPrime = () => generalGame(rules, questionAnswer)

export default brainPrime
