const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
]

const callCountries = listOfNeighbours => {
    listOfNeighbours.forEach(arr => {
        arr.forEach(country => {
            console.log(`Neighbour: ${country}`);
        })
    })
}

callCountries(listOfNeighbours)
