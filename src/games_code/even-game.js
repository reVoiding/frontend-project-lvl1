import readlineSync from 'readline-sync';

// Чётность
const evenGame = () => {
  // Start
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  // rules
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Randomize
  const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  // Evenness?
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  for (let i = 0; i < 3; i += 1) {
    const num = randNum(1, 99); // генерим случайно число
    const correctAnswer = isEven(num); // проверяем первое число на четность
    console.log(`Question: ${num}`); // задаем вопрос
    const userAnswer = readlineSync.question('Your answer:'); // получаем ответ игрока
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${userAnswer}'.`);
      console.log(`Let's try again, ${userName}!`); // отвечаем игроку
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
