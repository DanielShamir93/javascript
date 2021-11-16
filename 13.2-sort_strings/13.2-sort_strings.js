// a
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const a_descendingOrder = (a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        // b is bigger than a
        if (b.charCodeAt(i) - a.charCodeAt(i) > 0) {
            return 1;
        } else if (b.charCodeAt(i) - a.charCodeAt(i) < 0){
            return -1;
        }
    }
    // one includes the other
    return a.length > b.length ? 
    -1 : a.length < b.length ?
    1 : 0;
}

// a.1
const a1_resArr = foods.sort(a_descendingOrder).sort();
// console.log(a1_resArr);

// a.2
const a2_resArr = foods.sort().sort(a_descendingOrder)
// console.log(a2_resArr);





// b
const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple",];

const b_ascendingOrder = (a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        // b is bigger than a
        if (b.toLowerCase().charCodeAt(i) - a.toLowerCase().charCodeAt(i) > 0) {
            return -1;
        } else if (b.toLowerCase().charCodeAt(i) - a.toLowerCase().charCodeAt(i) < 0){
            return 1;
        }
    }
    // one includes the other
    return a.length > b.length ? 
    1 : a.length < b.length ?
    -1 : 0;
}

const b_descendingOrder = (a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        // b is bigger than a
        if (b.toLowerCase().charCodeAt(i) - a.toLowerCase().charCodeAt(i) > 0) {
            return 1;
        } else if (b.toLowerCase().charCodeAt(i) - a.toLowerCase().charCodeAt(i) < 0){
            return -1;
        }
    }
    // one includes the other
    return a.length > b.length ? 
    -1 : a.length < b.length ?
    1 : 0;
}

// b.1
const b1_resArr = foodsWithUpperCase.sort(a_descendingOrder).sort(b_ascendingOrder);
// console.log(b1_resArr);

// b.2
const b2_resArr = foodsWithUpperCase.sort(b_ascendingOrder).sort(b_descendingOrder);
// console.log(b2_resArr);






// c
const c_lengthOrder = (a, b) => b.length - a.length;
const c_resArr = foodsWithUpperCase.sort(c_lengthOrder);
console.log(c_resArr);