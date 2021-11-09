// return the avg
const averageScore = scores => {
    return scores.reduce( (prevValue, currValue) => {
        return prevValue + currValue; 
    }, 0) / scores.length;
}

// return max avg
const getMaxAvg = avgs => {
    
}


const getTheWinner = (...teams) => {
    
    const avg = teams.map( team => {
        return averageScore(team);
    })

    const maxAvg = getMaxAvg();

    return teams.filter(winAvg => {
        if (winAvg === maxAvg) {
            return 
        }
    })
}






getTheWinner([89, 120, 103], [116, 94, 123], [53, 43, 46]);
