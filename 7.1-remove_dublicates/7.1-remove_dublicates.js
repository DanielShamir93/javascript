const getNoDupArr = intArr => {
    let resArr = [];
    intArr.forEach( element => {
        // element is not in resArr
        if (resArr.indexOf(element) === -1){
            resArr.push(element);
        }
    })
    return resArr;
}

console.log(getNoDupArr([3, 4, 4, 3, 6, 3]));