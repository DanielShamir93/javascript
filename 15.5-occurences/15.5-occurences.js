// 1
// line 8: counter + 1 should be counter++

// 2
// vscode

// 3
// if there is a char inside the string the functions will always returns 1

// 4
function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++;
        }
    }
    return counter ;
}
    
    
console.log(countOccurrences ("ini mini miny moe" ,"n"));