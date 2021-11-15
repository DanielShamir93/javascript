const data = [{name: "John",birthday: "1-1-1995",favoriteFoods: {meats: ["hamburgers", "sausages"],fish: ["salmon", "pike"],},},{name: "Mark",birthday: "10-5-1980",favoriteFoods: {meats: ["hamburgers", "steak", "lamb"],fish: ["tuna", "salmon", "barracuda"],},},{name: "Mary",birthday: "1-10-1977",favoriteFoods: {meats: ["ham", "chicken"],fish: ["pike"],},},{name: "Thomas",birthday: "1-10-1990",favoriteFoods: {meats: ["bird", "rooster"],fish: ["salmon"],},},{name: "Mary",birthday: "1-10-1977",favoriteFoods: {meats: ["hamburgers", "lamb"],fish: ["anchovies", "tuna"],},},];


// 1 
const getAllNames1 = (data) => {
    return data.map((obj) => obj.name);
}

// console.log(getAllNames1(data));

// 2 
const before1990 = (obj) => {
    if (obj.birthday < 1990) {
        return obj;
    }
}

const getAllNames2 = (data) => {
    return data.filter(before1990);
}

// console.log(getAllNames2(data));


// 3
const countFood = (data) => {
    const resObj = {};
    data.forEach((obj) => {
        const foodsArr = Object.values(obj.favoriteFoods).flat();
        foodsArr.forEach((foodName) => {
            if (resObj.hasOwnProperty(foodName)) {
                resObj[foodName] ++;
            } else {
                resObj[foodName] = 1;
            }
        })
    })
    return resObj;
}

// console.log(countFood(data));