function addRecipe(event) {

    let recipeFormula = document.getElementById('formula_recipe').value
    let recipeLink = document.getElementById('formula_link').value
    let recipeValue = [recipeFormula, recipeLink];

    let baliseRecipeFormula = document.createElement('p');
    let textRecipeFormula = document.createTextNode("TEST");
    baliseRecipeFormula.appendChild(textRecipeFormula);
    document.getElementById('container').appendChild(baliseRecipeFormula);
    event.preventDefault();
    // return containerRecipe;
    // alert(myElm);
}
