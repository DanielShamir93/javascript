const worldPopulation = 7900;
const populations = [9.2, 132, 100, 50];

const percentageOfWorld = population => (population / worldPopulation * 100) + '%';

const populationPercentage = population => {
    let percentages = [];
    for (p of population) {
        percentages.push(percentageOfWorld(p));
    }
    return percentages;
}


console.log(populationPercentage(populations));