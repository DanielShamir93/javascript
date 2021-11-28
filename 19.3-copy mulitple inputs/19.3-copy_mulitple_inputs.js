document.addEventListener('paste', (e) => {
    e.stopPropagation();
    e.preventDefault();

    let clipboardData = e.clipboardData;
    let pastedData = clipboardData.getData('Text');
    let liList = document.querySelector('.inputs-list').children;

    for (let i = 0; i < liList.length; i++) {
        if (pastedData[i]) {
            liList[i].children[0].value = pastedData[i];
        } else {
            liList[i].children[0].value = '';
        }
    }

    for(li of liList) {
        if (li.children[0].value.length !== 1) {
            return;
        }
    }

    document.querySelector('.verify').click();
});


// document.addEventListener('change', (e) => {
//     const liList = document.querySelector('.inputs-list').children;

//     for(li of liList) {
//         if (li.children[0].length !== 1) {
//             return;
//         }
//     }
//     document.querySelector('.verify').click();
// });



window.onload = () => {
    const liList = document.querySelector('.inputs-list').children;
    for(li of liList) {
        li.children[0].value = '';
    }
}