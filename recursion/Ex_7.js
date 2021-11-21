const decodeString = (s) => {
    if (s === '') {
        return '';
    } else if (/[A-Za-z]/.test(s[0])) {
        // Next character is a letter

        // Get next word
        let sub = s.match(/[A-Za-z]+/).join();
        // Remove next word from s
        s = s.replace(/[A-Za-z]+/, '');
        // Return word + decode the rest of s
        return sub + decodeString(s);
    } else if (/\d/.test(s[0])) {
        // Next character is a number

        // Get the next number
        let num = parseInt(s.match(/\d+/).join(''));
        // Remove the next number
        s = s.replace(/\d+/, '');
        // Get into sub first parenthesis substring
        let sub = getSubstringInFirstParenthesis(s);
        // Decode substring from first outer parenthesis + decode rest of s
        return decodeString(sub.slice(0, sub.length-1)).repeat(num) + decodeString(s.slice(sub.length + 1));
    } 
}

// Returns substring of the first parenthesis
const getSubstringInFirstParenthesis = (s) => {
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

const s1 = "3[a]2[bc]";
const s2 = "3[a2[c]]";
const s3 = "2[abc]3[cd]ef";
const s4 = "abc3[cd]xyz";

console.log(decodeString(s1),'\t\texpected: aaabcbc')
console.log(decodeString(s2),'\t\texpected: accaccacc')
console.log(decodeString(s3),'\t\texpected: abcabccdcdcdef')
console.log(decodeString(s4),'\t\texpected: abccdcdcdxyz')