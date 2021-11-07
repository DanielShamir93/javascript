const describeCountry = (country, population, capitalCity) => {
    return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

const countries = [
    {
        country: 'Israel',
        population: 9.3,
        capitalCity: 'Jerusalem'
    },
    {
        country: 'United States of America',
        population: 329.5,
        capitalCity: 'Washington D.C'
    },
    {
        country: 'Germany',
        population: 80,
        capitalCity: 'Berlin'
    }
]

for (c of countries) {
    console.log(describeCountry(c.country, c.population, c.capitalCity));
}