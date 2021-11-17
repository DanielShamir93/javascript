

// 1
// Line 1: TypeError: arr1 is undefined  -->  add comma in call
// Line 4: invalid assignment to const 'sum'  -->  change to let
// No return statement from getSum


// NOTE: 

// 2
// firefox debugger


// 3
// getSum gets two arrays which doesn't have comma in between them.
// the function tries to add numbers a const and doesn't return anything at the end.

// 4
function getSum(arr1, arr2) {
    debugger;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i];
    }
    return sum;
  }



const h1 = document.createElement('h1');
h1.innerText = getSum([1, 2, 3], [(5, 66, 23)]);
document.getElementsByTagName('div')[0].appendChild(h1);