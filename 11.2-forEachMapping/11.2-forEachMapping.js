const intArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1
const doubleFunc = (value) => value * 2;

const doubleValues = (intArr, doubleFunc) => {
    return intArr.map(doubleFunc);
}

// console.log(doubleValues(intArr, doubleFunc));

// 2

const onlyEvenValues = (arr) => {
    let resArr = [];
    arr.forEach((num) => {
        if (num % 2 === 0) {
            resArr.push(num);
        }
    });
    return resArr;
}

// console.log(onlyEvenValues(intArry)) 


/**Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with strings that have only the first and last characters of each string in the input array. It should ignore array elements that are not strings. */

// 3
const showFirstAndLast = (arr)=> { 
    const resArr = [];

    arr.forEach((str) => {
        if (typeof str === 'string') {
            if (str.length === 1) {
                resArr.push(str);   
            } else {
                resArr.push(`${str[0]}${str[str.length-1]}`);   
            }
        }
    })
    return resArr;
}

// console.log(showFirstAndLast(['1', '12', '123', '12345']));

// 4
const letterAsAKey = arr => {
    arr = Array.from(arr.join(''));
    resObj = {};
    arr.forEach((letter) => {
        if ('aeiou'.includes(letter.toLowerCase())) {
            let prop = letter.toLowerCase();
            if (resObj.hasOwnProperty(prop)) {
                resObj[prop]++;
            }
            else {
                resObj[prop] = 1;
            }
        }
    })
    return resObj;
}

// console.log(letterAsAKey(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]));





// 5
const capitalize = (str) => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resStr = '';
    Array.from(str).forEach((letter) => {
        if (letter.toLowerCase() !== letter.toUpperCase()) {
            resStr += upper[lower.indexOf(letter)];
        } else {
            resStr += letter;
        }
    });
    return resStr;
}

console.log(capitalize('wheee!! im capitalized'));







// 6
const shiftDownLetter = (letter) => 
    letter === 'a' ? 
    'z': 
    String.fromCharCode(letter.charCodeAt(0) - 1);


const shiftLetter = (str) => {
    return str.replace(/\w/g, shiftDownLetter);
}

// console.log(shiftLetter('abcdefg'));

// 7
const swapCases = (subStr) => {
    return subStr.split(' ')[0].toLowerCase() + ' ' + subStr.split(' ')[1].toUpperCase();
}

const swapCase = (str) => {
    return str.replace(/[A-Za-z]+\s+[A-Za-z]+/g, swapCases)
}

// console.log(swapCase('matti shaked svetlana omar fida ernest'));