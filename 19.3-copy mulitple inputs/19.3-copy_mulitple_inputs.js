document.addEventListener('paste', (e) => {
    e.stopPropagation();
    e.preventDefault();

    let clipboardData = e.clipboardData;
    let pastedString = clipboardData.getData('text');
    pasteInput(pastedString);
    validatePass();
});

const pasteInput = (pastedString) => {
    const liList = document.querySelector('.inputs-list').children;

    for (let i = 0; i < liList.length; i++) {
        if (pastedString[i]) {
            liList[i].children[0].value = pastedString[i];
        } else {
            liList[i].children[0].value = '';
        }
    }
}

document.addEventListener('input', (e) => {

    if (e.key === 'Backspace') {
        return;
    }

    switch (e.target.className) {
        case 'input1':  document.querySelector('.input2').focus();
                        break;
        case 'input2':  document.querySelector('.input3').focus();
                        break;
        case 'input3':  document.querySelector('.input4').focus();
                        break;
        case 'input4':  document.querySelector('.input5').focus();
                        break;
        case 'input5':  document.querySelector('.input6').focus();
                        break;
    }
    validatePass();
});

const validatePass = () => {
    let liList = document.querySelector('.inputs-list').children;
    for(li of liList) {
        if (li.children[0].value.length !== 1) {
            return;
        }
    }
    document.querySelector('.verify').click();
}

















window.onload = () => {
    const liList = document.querySelector('.inputs-list').children;
    for(li of liList) {
        li.children[0].value = '';
    }
}