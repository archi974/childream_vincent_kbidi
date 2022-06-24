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

    e.preventDefault();
}

let count = 0;
let btnAddFood = document.getElementById("button_add_food");
// let i = 0;

function addComponent(e) {
// console.log(e);
    // let firstCompFood = document.getElementById("first_component_food");
    // let secondCompFood = document.getElementById("second_component_food");
    // let thirdCompFood = document.getElementById("third_component_food");
    
    // i = 0;
    // let valuesComponent = document.getElementsByClassName("food_button");
    i = 0;
    i++;
    console.log(e.target.innerHTML);
    // const check = localStorage.setItem(e.target.value, "first_component");
    // console.log(check);

    count++;
    // console.log(localStorage.getItem("first_component", e.target.value));
    // if (e.target.value === localStorage.getItem("first_component")) {
    //     console.log('TEST');
    // firstCompFood.innerHTML = count;
    // }
    // else if () {
    //     secondCompFood.innerHTML = count;
    // } else {
    //     thirdCompFood.innerHTML = count;
    // }

    // e.preventDefault();
    // console.log(count);
}