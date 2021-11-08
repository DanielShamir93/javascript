// numbers in millions
const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return population / worldPopulation * 100 + '%';
} 
    
const percentageOfWorld2 = population => population / worldPopulation * 100 + '%';


const IsraelPopulation = 9.3;
const USPopulation = 329.5;
const GermanyPopulation = 80;

console.log('percentage Of World 1');
console.log(percentageOfWorld1(IsraelPopulation));
console.log(percentageOfWorld1(USPopulation));
console.log(percentageOfWorld1(GermanyPopulation));

console.log('\npercentage Of World 2');
console.log(percentageOfWorld2(IsraelPopulation));
console.log(percentageOfWorld2(USPopulation));
console.log(percentageOfWorld2(GermanyPopulation));