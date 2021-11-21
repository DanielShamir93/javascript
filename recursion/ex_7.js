
const decodeString = (s) => {
    if (s === '') {
        return '';
    } else if (/[A-Za-z]/.test(s[0])) {
        // Next character is a letter

        // Get next sequence of letters
        let sub = s.match(/[A-Za-z]+/).join();
        // Remove next sequence of letters from s
        s = s.replace(/[A-Za-z]+/, '');

        return sub + decodeString(s);
    } else if (/\d/.test(s[0])) {
        // Next character is a number

        // Get the next number
        let num = parseInt(s.match(/\d+/).join(''));
        // Remove the next number
        s = s.replace(/\d+/, '');
        // Get into sub first parenthesis substring
        let sub = getNextFirstParenthesisSubstring(s);
        // Decode substring from first outer parenthesis + decode rest of s
        return decodeString(sub.slice(0, sub.length-1)).repeat(num) + decodeString(s.slice(sub.length + 1));
    } 
}

// Returns substring of the first parenthesis
const getNextFirstParenthesisSubstring = (s) => {
    let openParenthesisCounter = 1;
    let sub = '';
    for (let i = 1; openParenthesisCounter > 0; i++) {
        if (s[i] === '[') {
            openParenthesisCounter++;
        } else if (s[i] === ']') {
            openParenthesisCounter--;
        }
        sub += s[i];
    }
    return sub;
}



// console.log(decodeString('2[a2[3[b]z]y]'));

