const arr = [1, 7, 3, 0, -5, 7, 3, 9];

// 1
for (i of arr) {
    console.log(i);
}

// 2
const arrayLength = arr => {
    let len = 0;
    for (i of arr) {
        len ++;
    }
    return len;
}

// 3
const arraySum = arr => {
    return arr.reduce( (prevVal, currVal) => {
        return prevVal + currVal;
    });
}

// 4
const arrayMulti = arr => {
    return arr.reduce( (prevVal, currVal) => {
        return prevVal * currVal;
    });
}
