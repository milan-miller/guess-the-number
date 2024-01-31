'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.header__question-mark').textContent = secretNumber;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', () => {
	const guessedNumber = document.querySelector('.main__input').value * 1;
	const feedbackMessage = document.querySelector('.main__score :first-child');

	if (!guessedNumber) {
		feedbackMessage.textContent = 'No number!';
	} else if (guessedNumber === secretNumber) {
		feedbackMessage.textContent = 'Correct number!';
	} else if (guessedNumber > secretNumber) {
		if (score > 1) {
			feedbackMessage.textContent = 'Your guess was too high!';
			document.querySelector('.score').textContent = score -= 1;
		} else {
			feedbackMessage.textContent = 'You lost!';
			document.querySelector('.score').textContent = 0;
		}
	} else {
		if (score > 1) {
			feedbackMessage.textContent = 'Your guess was too low!';
			document.querySelector('.score').textContent = score -= 1;
		} else {
			feedbackMessage.textContent = 'You lost!';
			document.querySelector('.score').textContent = 0;
		}
	}
});
