// 1
const printNumber = async () =>{  
    for(var i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000);
    }
}

// printNumber();


// 2
const beFalsePrint1 = () => {console.log(1); return false;}
const beTruePrint2 = () => {console.log(2); return true;}
const beTruePrint3 = () => {console.log(3); return true;}

const beTruePrint1 = () => {console.log(1); return true;}
const beFalsePrint2 = () => {console.log(2); return false;}

const be1Print1 = () => {console.log(1); return 1;}
const be2Print2 = () => {console.log(2); return 2;}
const be3Print3 = () => {console.log(3); return 3;}

// console.log(beTruePrint2() || beTruePrint3());
