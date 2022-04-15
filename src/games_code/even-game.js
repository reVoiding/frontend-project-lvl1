import readlineSync from 'readline-sync'

const evenGame = () => {
  // Start
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')

  // Evenness?
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes'
    }
    return 'no'
  }

  // Randomize
  const randNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  // Hi and rules
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  // rounds
  for (let i = 0; i < 3; i += 1) {
    const num = randNum(1, 99)
    const correctAnswer = isEven(num)
    console.log(`Question: ${num}`)
    const userAnswer = readlineSync.question('Your answer:')
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;( Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${userName}!`)
      if (i-- < 0) i = 0
    }
  }
  // Bravo!
  console.log(`Congratulations, ${userName}!`)
}

export default evenGame
