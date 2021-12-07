// Requesting for food recipe Ids
const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([532, 543, 753, 1, 5]);
    }, 1500);
});

// Fetching a recipe with a given Id
const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

// Consuming the promise 
const fetchRecipe = async () => {
    try {
        const IDs = await getIDs();
        console.log(IDs);
        const recipe = await getRecipe(IDs[2]);
        console.log(recipe);
    } catch(err) {
        console.log("It is an error!");
    }
    
}

fetchRecipe();