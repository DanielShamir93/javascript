// 1
// line 4: SyntaxError: Unexpected token '{'  -->  change 'elseif' to 'else if'
// line 10: the name findSmalest is incorrect  -->  change to findSmallest
// change findSmallest conditions completely

// 2 
// vscode debugger

//3 self explained in section (1)

// 4
function findSmallest(a, b, c) {
    if (b > a && c > a) {
        return a;
    } 
    else if (a > b && c > b) {
        return a;
    } else {
        return c;
    }
}
    
console.log(findSmallest(52,66, 2));
