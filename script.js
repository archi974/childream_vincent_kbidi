function addRecipe(e) {

    let recipeFormula = document.getElementById('formula_recipe').value;
    let recipeLink = document.getElementById('formula_link').value;
    let componentFormula = recipeFormula.match(/= (.*)*/);
    let calculationFormula = recipeFormula.match(/(.*)= */);
    
    // Description
    let baliseRecipeFormula = document.createElement('a');
    let descriptionRecipe = document.createElement('p');
    descriptionRecipe.className = 'recipe_description';
    descriptionRecipe.innerText = componentFormula[1];

    //ingrédient
    let ingredientRecipe = document.createElement('p');
    ingredientRecipe.className = 'recipe_ingredient';
    ingredientRecipe.innerText = calculationFormula[1];

    //description + ingrédient
    let divText = document.createElement('div');
    divText.className = "container.text";
    divText.append(descriptionRecipe, ingredientRecipe)

    //image
    let pictureRecipe = document.createElement('img');
    pictureRecipe.src = "https://wordpress.potagercity.fr/wp-content/uploads/2019/02/Tarte-%C3%A0-la-noix-de-coco.jpg";
    pictureRecipe.alt = "tarte noix de coco";
    pictureRecipe.className = 'recipe_picture';


    baliseRecipeFormula.append(divText, pictureRecipe);
    baliseRecipeFormula.href = recipeLink;
    baliseRecipeFormula.className = "recipe_pin";
    document.getElementById('container').appendChild(baliseRecipeFormula);

    // e.preventDefault();
}