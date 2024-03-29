
const stopwatch = (stopAtMinute) => {
    const milSecElement = document.querySelector('.milsec');
    const secElement = document.querySelector('.sec');
    const minElement = document.querySelector('.min');
    let milSec = 0;
    let sec = 0;
    let min = 0;

    setInterval(() => {
    
        if (min === stopAtMinute) {
            clearInterval(stopwatch);
            return;
        }
    
        milSec++;
    
        if (milSec === 1000) {
            sec++;
            milSec = 0;
    
            if (sec === 60) {
                min++;
                sec = 0;
            }
        }
        
        milSecElement.textContent = milSec < 10 ? `00${milSec}` : milSec < 100 ? `0${milSec}` : milSec;
        secElement.textContent = sec < 10 ? `0${sec}` : sec;
        minElement.textContent = min < 10 ? `0${min}` : min;
    
    }, 1);
} 


stopwatch(60);