document.querySelector('.submit').addEventListener('click', (e) => {
    const textarea = document.querySelector('textarea');
    const h5 = document.querySelector('h5');

    if (textLength(textarea.value) < 100) {
        h5.style.color = 'red';
        h5.textContent = `Must contain at least 100 characters`;
    } else {
        h5.style.color = 'green';
        h5.textContent = `Number of characters: ${textLength(textarea.value)}`;
    }
});

const textLength = (str) => {
    return str.match(/[\S]+/g).join('').length;
}