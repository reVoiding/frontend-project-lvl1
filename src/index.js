import readlineSync from 'readline-sync'

//GeneralModule

// Random
export const randNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const generalGame = (rules, questAnswer) => {
  // Salutation
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name?')
  console.log(`Hello, ${userName}!`)
  console.log(rules)

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = questAnswer()
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer:')

    if (userAnswer === answer) {
      console.log('Correct!')
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
      )
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
