const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 9.3,
    neighbors: ['Jordan', 'Lebanon', 'Syria', 'Egypt'],
    describe() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`)
    }
}

myCountry.describe();