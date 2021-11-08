const averageScore = (scores) => {
    return scores.reduce( (prevValue, currValue) => {
        return prevValue + currValue; 
    }, 0) / scores.length;
}

const getTheWinner = (johnsTeamScores, mikesTeamScores) => {
    const johnsTeamAvgScore = averageScore(johnsTeamScores);
    const mikesTeamAvgScore = averageScore(mikesTeamScores);

    if (johnsTeamAvgScore === mikesTeamAvgScore) {
        console.log(`There is a draw: ${johnsTeamAvgScore}`);
    } else {
        console.log(johnsTeamAvgScore > mikesTeamAvgScore ? `John's Team: ${johnsTeamAvgScore}`: `Mike's Team: ${johnsTeamAvgScore}`);
    }
}

getTheWinner([89, 120, 103], [116, 94, 123]);
getTheWinner([53, 43, 46], [15, 24, 55]);

