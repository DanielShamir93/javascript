const logarithm = (number, res) => {
    if (res <= 1) {
        return 0;
    }
    res = Math.floor( res / number);
    return logarithm(number, res) + 1;
}


console.log(logarithm(5, 126))
