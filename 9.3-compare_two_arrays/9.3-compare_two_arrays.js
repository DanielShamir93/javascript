const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const distinctArr = (value, index, categoryArray) => categoryArray.indexOf(value) === index;

const compareArrays = (food, food1) => {
    let res = [];
    for (let i = 0; i < food.length; i++) {
        for (let j = 0; j < food1.length; j++) {
            if (food[i] === food1[j]) {
                res.push(food[i]);
            }
        }
    }
    return res.length > 0 ? res.filter(distinctArr) : false;
}


console.log(compareArrays(food, food1))