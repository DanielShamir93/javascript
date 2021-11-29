document.querySelector('.submit').addEventListener('click', (e) => {
    const h1 = document.querySelector('h1');
    const age = document.querySelector('.age').value;

    h1.innerText = '';
    if (age < 18) {
        h1.innerText = 'you’re too young';
    } else {
        h1.innerText = 'you can drink';
    }
});