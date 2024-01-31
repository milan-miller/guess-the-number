'use strict';

const bodyElement = document.querySelector('body');
const scoreDisplay = document.querySelector('.score');
const secretNumberDisplay = document.querySelector('.header__question-mark');
const feedbackMessage = document.querySelector('.main__scores :first-child');
const highScoreDisplay = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let previousHighscore = 0;

const setBodyBackground = (color) => {
	bodyElement.style.backgroundColor = color;
};

const setScore = (score) => {
	scoreDisplay.textContent = score;
};

const displayMessage = (message) => {
	feedbackMessage.textContent = message;
};

const displaySecretNumber = (message) => {
	secretNumberDisplay.textContent = message;
};

const setHighscore = (highscore) => {
	highScoreDisplay.textContent = highscore;
};

setScore(score);

document.querySelector('.check').addEventListener('click', () => {
	const guessedNumber = document.querySelector('.main__input').value * 1;

	if (!guessedNumber) {
		displayMessage('No number!');
	} else if (guessedNumber === secretNumber) {
		displayMessage('Correct number!');
		displaySecretNumber(secretNumber);
		setBodyBackground('#60b347');
		previousHighscore = score > previousHighscore ? score : previousHighscore;
		setHighscore(previousHighscore);
	} else if (guessedNumber !== secretNumber) {
		if (score > 1) {
			displayMessage(
				guessedNumber > secretNumber
					? 'Your guess was too high!'
					: 'Your guess was too low!'
			);
			scoreDisplay.textContent = score -= 1;
		} else {
			displayMessage('You lost!');
			setScore(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', () => {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	setScore(score);
	displayMessage('Start guessing...');
	displaySecretNumber('?');
	setBodyBackground('#fff');
});
