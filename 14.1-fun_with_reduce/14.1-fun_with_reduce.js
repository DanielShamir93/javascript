// 1
const max = (numbers) => {
    return numbers.reduce((max, currVal) => {
        return max > currVal ? max : currVal;
    });
}


// console.log(max([1,2,3,4]));


// 2
const sumOfEven = (numbers) => {
    return numbers.reduce((sum, currVal) => {
        if (currVal % 2 === 0) {
            return sum + currVal;
        } else {
            return sum;
        }
    }, 0);
}

// console.log(sumOfEven([4,2,3,4]));


// 3 
const average = (numbers) => {
    return numbers.reduce((preVal, currVal) => {
        return preVal + currVal
    }) / numbers.length;
}

// console.log(average([1,2,3,4]));
