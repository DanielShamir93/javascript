const array = ['Ernest', 'Matti', 'Fida', 'Svetlana', 'Omar', 'Shaked', 'Daniel'];


const makeAllCaps = (wordsArray) => {
    return new Promise((resolve, reject) => {
        for (word of wordsArray) {
            if (typeof word !== 'string') {
                return reject(new Error('Array has non string item!'));
            }
        }
        return resolve({data: wordsArray});
    });
}

const sortWords = (wordsObject) => {
    return new Promise((resolve, reject) => {
        return resolve({data: wordsObject.data.sort()});
    });
}

makeAllCaps(array)
    .then((res) => {
        return sortWords(res);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })


