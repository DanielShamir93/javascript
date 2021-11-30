document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Show dialog message
    document.querySelector('.dialog-box').style.display = 'flex';

    // Get form input
    const data = new FormData(document.querySelector('form'));
    
    const dataMessage = getDataMessage(data)
    document.querySelector('.dialog-text').innerHTML = dataMessage;
    
});

const getDataMessage = (data) => {
    let message = '<h3>Your details:</h3>';
    for (const [name, value] of data) {
        message += name + ': ' + value + '<br>';
    }
    return message;
}


document.querySelector('.change-button').addEventListener('click', (e) => {
    // hide dialog message
    document.querySelector('.dialog-box').style.display = 'none';
});

document.querySelector('.confirm-button').addEventListener('click', (e) => {
    document.querySelector('.dialog-text').textContent = 'Congratulations you successfully sent this form';
});

