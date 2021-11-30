let isFirstKeyup = true;
let lastDate = 0;
let computerIsRacing = null;
let isRaceFinished = false;

// User listener
document.addEventListener('keyup', (e) => {
    const userTrack = document.querySelector('#player1-race').children;
    let time = 0;

    if (isRaceFinished) {
        return;
    }

    // Get position step time
    if (isFirstKeyup) {
        // First step
        lastDate = Date.now();
    } else {
        time = Date.now() - lastDate;
        lastDate = Date.now();
    }
    
    makeStep(userTrack, 'user', time);
});


// Computer listener
document.addEventListener('keyup', (e) => {
    const computerTrack = document.querySelector('#player2-race').children;

    if (isFirstKeyup) {
        // Computer shoots only on the first keyup
        isFirstKeyup = false;
        const time = getRandomTime();
        setTimeout(() => {makeStep(computerTrack, 'computer', time)}, time);
    }
});


// Dialog message listener
document.querySelector('.restart-game').addEventListener('click', (e) => {
    window.location.reload(); 
});




// Functions
const getRandomTime = () => Math.floor(Math.random() * 200);

const isFinishLine = (position) => position.nextElementSibling.classList.contains('finish');

const setStepTimeOnBoard = (player, positionIndex, time) => {
    if (player === 'user') {
        const currentTimeBoard = document.querySelector('.user-time-board').children[positionIndex];
        currentTimeBoard.textContent = time;
    } 
    else if (player === 'computer') {
        const currentTimeBoard = document.querySelector('.computer-time-board').children[positionIndex];
        currentTimeBoard.textContent = time;
    }
    
}

const makeStep = (track, player, time) => {
    for (let position of track) {
        if (position.classList.contains('active')) {
            // Found the player on the track
            position.classList.remove('active');
            position.nextElementSibling.classList.add('active');

            // Get player position on the track
            const positionIndex = Array.from(track).indexOf(position);
            
            if (player === 'user') {
                setStepTimeOnBoard('user', positionIndex, time);

                if (isFinishLine(position)) {
                    document.querySelector('.dialog-box').style.display = 'flex';
                    document.querySelector('.dialog-text').textContent = 'You are the winner!';
                    clearTimeout(computerIsRacing);
                    isRaceFinished = true;
                    return;
                }
            } 
            else if (player === 'computer') {
                // Announce position step time
                const currentTimeBoard = document.querySelector('.computer-time-board').children[positionIndex];
                currentTimeBoard.textContent = time;
                
                if (isFinishLine(position)) {
                    document.querySelector('.dialog-box').style.display = 'flex';
                    document.querySelector('.dialog-text').textContent = 'The computer is the winner!';
                    isRaceFinished = true;
                    return;
                }
                // Make automatic steps randomly
                time = getRandomTime();
                computerIsRacing = setTimeout(() => {makeStep(track, 'computer', time)}, time);
            }
        
            return;
        }
    }
}





