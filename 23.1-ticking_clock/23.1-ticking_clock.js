const tickingClock = () => {
    setInterval(() => {
        document.querySelector('.clock').textContent = new Date().toLocaleTimeString();
    }, 1000);
}

tickingClock();