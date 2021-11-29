document.querySelector('.submit').addEventListener('click', (e) => {
    const textarea = document.querySelector('textarea');

    if (textarea.value.trim().length < 100) {
        // text length is less than 100 characters
        alert('Must have at least 100 characters');
    }
})