import { generalGame, randNum } from "../index.js";

// Прогрессия
const progressStart = (start, length, counter) => {
  const result = []
  for (let i = 0; i < length; i += 1) {
    result.push(start + counter * i)
  }
  return result
}

// меняем элемент прогрессии
const progressNoElement = (progression, item) => {
  const newProgress = progression.slice(0)
  newProgress[item] = '..'
  return newProgress.join(' ')
}

// question - answer
const questionAnswer = () => {
  const num1 = randNum(1, 10)
  const randGo = randNum(1, 5)
  const progressSize = randNum(5, 10)
  const randEl = randNum(1, progressSize)
  // Генерим прогрессию
  const progression = progressStart(num1, progressSize, randGo)

  // Удаляем элемент - вопрос
  const question = progressNoElement(progression, randEl)

  // Получаем  ответ - спрятанный элемент
  const delElement = num1 + randGo * randEl
  const answer = String(delElement)

  return [question, answer]
}

const rule = 'What number is missing in the progression?'

const brainProgression = () => generalGame(rule, questionAnswer)

export default brainProgression
