function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}


// const pokemon1 = new Pokemon('Matti', 'water', ['micAllaysOpen']);
// const pokemon2 = new Pokemon('Ernest', 'fire', ['forkUsing']);
// const pokemon3 = new Pokemon('Fida', 'wind', ['feed']);
const pokemonArray = [  new Pokemon('Matti', 'water', ['mic allWays open']),
                        new Pokemon('Ernest', 'fire', ['fork using']),
                        new Pokemon('Fida', 'wind', ['feed all with fairies'])];

function callPokemon() {
    console.log(`I choose you ${this.name}`);
}

function attack(attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
}

Pokemon.prototype.callPokemon = callPokemon;
Pokemon.prototype.attack = attack;

pokemonArray.forEach((pokemon) => {
    pokemon.callPokemon();
    pokemon.attack(0);
});