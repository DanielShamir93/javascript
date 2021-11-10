const book = {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss',
    Publisher: 'Random House USA Inc',
    numOfPages: 72
}

const swapObjProp = obj => {
    let res = {};
    Object.keys(obj).map( key => {
        res[obj[key]] = obj[key];
        res[obj[key]] = key;
    })
    return res;
}

console.log(swapObjProp(book));