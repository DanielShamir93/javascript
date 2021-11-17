// 1
// line 2: sum wasn't initialized
// line 6: calcAverage returned the sum and not the average

// 2
// vscode

// 3
// self explained for 1

// 4

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / 3;
}

console.log(calcAverage([85, 90, 92]));
