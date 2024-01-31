'use strict';

const scoreDisplay = document.querySelector('.score');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

scoreDisplay.textContent = score;

const displayMessage = (message) => {
	const feedbackMessage = document.querySelector('.main__score :first-child');
	feedbackMessage.textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
	const guessedNumber = document.querySelector('.main__input').value * 1;

	if (!guessedNumber) {
		displayMessage('No number!');
	} else if (guessedNumber === secretNumber) {
		displayMessage('Correct number!');
		document.querySelector('.header__question-mark').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
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
			scoreDisplay.textContent = 0;
		}
	}
});
