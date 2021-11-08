let numSiblings = parseInt(window.prompt('How many siblings do you have?', 0));

if (numSiblings === 1) {
    console.log('1 sibling!');
} else if (numSiblings > 1) {
    console.log(`${numSiblings} sibling!`);
} else {
    console.log('0 or any other value');
}

// we should use === in order to catch input mistakes