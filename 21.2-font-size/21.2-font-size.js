document.addEventListener('click', (e) => {
    const element = e.target;
    const h1 = document.querySelector('h1');

    if (element.className === 'minus-button') {
        const h1FontSize = getComputedStyle(h1).fontSize;
        h1.style.fontSize = getValue(h1FontSize) - 2 + 'px';
        
    } else if (element.className === 'plus-button') {
        const h1FontSize = getComputedStyle(h1).fontSize;
        h1.style.fontSize = getValue(h1FontSize) + 2 + 'px';
    }
});


const getValue = (str) => {
    return parseInt(str.match(/\d+/));
}