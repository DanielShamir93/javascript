const isOpenParenthesis = (c) => {
    return /[\[\{\(]/.test(c);
}

const isClosedParenthesis = (c) => {
    return /[\]\}\)]/.test(c);
}

const isValidClosedParenthesis = (lastOpenedParenthesis, c) => {
    if (c === ']') {
        if (lastOpenedParenthesis !== '[') {
            return false;
        }
    } else if (c === '}') {
        if (lastOpenedParenthesis !== '{') {
            return false;
        }
    } else if (c === ')') {
        if (lastOpenedParenthesis !== '(') {
            return false;
        }
    }
    return true;
}

const properlyNested = (s) => {
    const openedParenthesisStack = [];
    if (s === '') {
        return '';
    }

    s = s.trim();
    // Checks if the first and last character are opened and closed parentheses
    if (!isOpenParenthesis(s[0]) || !isClosedParenthesis(s[s.length-1])) {
        return 0;
    }

    // Check if s is properly nested
    for(c of s) {
        if (isOpenParenthesis(c)) {
            openedParenthesisStack.push(c);
        }
        if (isClosedParenthesis(c)) {
            let lastOpenedParenthesis = openedParenthesisStack.pop();
            if (!isValidClosedParenthesis(lastOpenedParenthesis, c)) {
                return 0;
            }
        }
    }

    if (openedParenthesisStack.length > 0) {
        return 0;
    }
    

    return 1;
}


console.log(properlyNested("{(())}[][{}]") == true); 
console.log(properlyNested("{(())}[]]{}]") == false); 
console.log(properlyNested('{{}}') == true); 
console.log(properlyNested("{{}") == false); 
console.log(properlyNested('()(())') == true); 
console.log(properlyNested("(()") == false);
console.log(properlyNested('(Johnn(y) Bryce)') == true);