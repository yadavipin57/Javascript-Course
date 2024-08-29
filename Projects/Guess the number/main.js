let randomNumber = parseInt(Math.random() * 100 + 1);

const form = document.querySelector('form');
const userInput = document.querySelector('.guessField');
const submit = document.querySelector('#subt');
const quesses = document.querySelector('.quesses');
const remaining = document.querySelector('lastResult');
const lowHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Plese enter a valid number');
    } else if (guess > 100) {
        alert('Plese enter a valid number less than 100');
    } else {
        prevGuesses.push(guess);
        if (numGuess >= 10) {
            displayGuess(guess)
            displayMessage(`Game over! Random number was ${randomNumber}.`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congrats! You guessed it right.`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesses.innerHTML = `${guess}`
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowHi.innerHTML = `<h2>${message}</h2>`
}