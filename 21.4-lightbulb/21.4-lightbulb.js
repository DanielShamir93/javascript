document.querySelector('.bulb').addEventListener('click', (e) => {
    const bulbHead = document.querySelector('.bulb-head');
    const bulbHeadBase = document.querySelector('.bulb-head-base');
    const bulbInner = document.querySelector('.bulb-inner');
    const containerLightOff = document.querySelector('.container');

    bulbHead.classList.toggle('turnoff-light');
    bulbHeadBase.classList.toggle('turnoff-light');
    bulbInner.classList.toggle('turnoff-light');
    containerLightOff.classList.toggle('container-light-off');
});