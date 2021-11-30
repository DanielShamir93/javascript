let lettersGuessed = {};
let guessedLetter = 0;

const getRandomLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt());
}

// Get first guess letter
guessedLetter = getRandomLetter();

document.addEventListener('keypress', (e) => {
    let char = e.key.toLowerCase();

    if (isMessageOnShow()) {
        return;
    }

    if (isLetter(char)) {
        if (guessedLetter === char) {
            // User guessed the letter
            document.querySelector('.dialog-box').style.display = 'flex';
            document.querySelector('.message-button').innerHTML = 'Play Again';
            document.querySelector('.message').style.color = 'green';
            document.querySelector('.message').innerHTML = `Well Done!!<br>You guessed right the letter: '${char}'`;
        } else if (!lettersGuessed.hasOwnProperty(char)) {
            // A new letter was guessed
            lettersGuessed[char] = true;
            document.querySelector('.guesses').textContent = Object.keys(lettersGuessed);
        } else {
            // This letter was already guessed
            document.querySelector('.dialog-box').style.display = 'flex';
            document.querySelector('.message-button').innerHTML = 'Continue';
            document.querySelector('.message').style.color = 'red';
            document.querySelector('.message').innerHTML = `'${char}' was already guessed!`;
        }
    }
});

const isLetter = (char) => {
    return /[a-z]/.test(char);
}

const isMessageOnShow = () => {
    return document.querySelector('.dialog-box').style.display === 'flex';
}

// reset game
document.querySelector('.message-button').addEventListener('click', () => {
    let buttonText = document.querySelector('.message-button').innerHTML;

    // play again
    if (buttonText === 'Play Again') {
        lettersGuessed = {};
        guessedLetter = getRandomLetter();
        document.querySelector('.guesses').textContent = '';
    }

    document.querySelector('.dialog-box').style.display = 'none';
});