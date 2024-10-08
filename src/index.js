function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "101d4o98436b4b146a1ft157a3280a42";
  let context =
    "You are a creative chef, who loves cooking with staples from your fridge and pantry. You use normal and accessible ingedients. The recipes should be easy and quick to make and taste delicious. Follow the user instructions as the main ingredient in basic HTML and separate each line with a <br />. Show the recipe title inside a <strong> element, then use a standard recipe format: first the ingredients list (one row per new ingredient), followed by the instructions. Always begin a new row for a new preparation step. The recipe must be easy to read and easy to follow along. Only show the recipe title and the recipe.";
  let prompt = `Generate a recipe in German with ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
