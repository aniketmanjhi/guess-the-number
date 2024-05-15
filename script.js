'use strict';

const checkBtn = document.querySelector('.check');
const againkBtn = document.querySelector('.again');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};
const scoreCurrent = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const titles = document.querySelector('.titles');
let score = 20;
let highscore = 0;
console.log(randomNumber);

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageDisplay('No number!');
  } else if (guess === randomNumber) {
    messageDisplay('🎊 Correct Number');
    number.textContent = randomNumber;
    titles.textContent = '🍰 You Win! 🍰';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = score;
    }
    number.style.width = '30rem';
  } else if (guess > randomNumber && score > 0) {
    messageDisplay('📈 Too High');
    score--;
    scoreCurrent.textContent = score;
  } else if (guess < randomNumber && score > 0) {
    messageDisplay('📉 Too Low');
    score--;
    scoreCurrent.textContent = score;
  }
  if (score === 0) {
    messageDisplay('😢 Try Again!');
    titles.textContent = '😭 You Lose! 😭';
  }
});

againkBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreCurrent.textContent = score;
  messageDisplay('Start guessing...');
  document.querySelector('.guess').value = '';
  titles.textContent = 'Guess My Number!';
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
