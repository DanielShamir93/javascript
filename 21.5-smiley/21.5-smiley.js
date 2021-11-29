document.querySelector('.submit').addEventListener('click', (e) => {
    const smileysText = document.querySelector('.smileys-text');
    const number = document.querySelector('.number-input').value;
    smileysText.innerHTML = '&#129299;'.repeat(number);
});