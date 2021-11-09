const getAllLengths = arr => {
    return arr.map( item => {
        return item.length;
    })
}

console.log(getAllLengths(['123', '123456', '12345678']))