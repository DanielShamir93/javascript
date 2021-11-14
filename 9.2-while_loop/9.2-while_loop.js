const worldPopulation = 7900;
const populations = [9.2, 132, 100, 50];

const percentageOfWorld = population => (population / worldPopulation * 100) + '%';

const populationPercentage = population => {
    let percentages = [];
    let i = 0;
    while(i < population.length) {
        percentages.push(percentageOfWorld(population[0]));
        i++;
    }
    return percentages;
}


console.log(populationPercentage(populations));


// for better for me