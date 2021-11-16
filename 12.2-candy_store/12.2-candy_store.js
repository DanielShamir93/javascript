const candyStore = {candies: [{name:"mint gum",id:"as12f",price:2,amount:2},{name:"twix",id:"5hd7y",price:5,amount:4},],cashRegister:200}

// 1
function getCandy(candyStore, id) {
    const arr = candyStore.candies.filter((candy) => {
        return candy.id === id;
    });
    return arr[0];
}

console.log(getCandy(candyStore, '5'));

// 2
function getPrice(candyStore, id) {
    return candyStore.candies.filter((candy) => {
        return candy.id === id;
    })[0].price;
} 

// console.log(getPrice(candyStore, 'as12f'));


// 3
function addCandy(candyStore, id, name, price){
    candyStore.candies.push({name, id, price, amount: 1})
}

// addCandy(candyStore, '123', 123);

// 4
const decreaseAmount = (candyStore, id) => {
    return candyStore.candies.filter((candy) => {
        return candy.id === id;
    })[0].price;
}

function buy(candyStore, id) {
    let price = getPrice(candyStore, id);
    getCandy(candyStore, id).amount--;
    candyStore.cashRegister -= price;
}


// buy(candyStore, 'as12f');
// console.log(candyStore);