// Block 1

// firstResult <--  otherFunction     // otherFunction is defined inside someFunction and returned to firsResult
// result      <--  5                 // b is a closure because it defined outside of someFunction and return to result by otherFunction

// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }

// firstResult = someFunction(9);
// result = firstResult(2);



// Block 2

// a <-- 1          
// from hoisting a() will be positioned at the beginning of function b2 
// know when b2 will be called it will assign 'a' as locally to b2, 
// so when the function ends a will be again 1 as locally defined before b2

// var a = 1;
// function b2() {
    //   a = 10;
    //   return;
    //   function a() { };
// }
// b2();
// console.log(a);



// Block 3

// result to the console will be: 3 3 3
// setTimeout is an asynchronized function so after the 3 loops it will take place,
// until then, the loop will finish looping and i will be valued as 3,
// and because i is declared out of the loop scope (and before it) it will be valued as 3

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

