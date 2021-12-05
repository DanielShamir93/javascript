// 1
// The window, because this is a reference to the current execution scope which here is the global scope or the window

// console.log(this);

// 2a
// The window

// 2b
// const myObj = {
//   name: "Timmy",
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

// 3
// The window, because the function defined inside the global scope
// const myFuncDec = function () {
//   console.log(this);
// };
// myFuncDec();

// 4
// The window (from answer 1)
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();

// 5a
// The window, because we are invoking arrow function

// document.body.style.height = '100vh';
// document.body.addEventListener('click', () => {
//   console.log(this);
// });

// 5b
// document.body.style.height = '100vh';
// document.body.addEventListener('click', function() {
//   console.log(this);
// });





