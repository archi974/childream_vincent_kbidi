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
let currentFood;

let foodId = "first_component_food";
let countFoodId = "first_count_quantity";

function addComponent(e) {
    let firstCompFood = document.getElementById(foodId);
    let firstCountQuantityFood = document.getElementById(countFoodId);
    // let secondCompFood = document.getElementById("second_component_food");
    // let thirdCompFood = document.getElementById("third_component_food");

    count++;
    firstCompFood.value = e.target.value;
    if (currentFood != e.target.value) {
        currentFood = e.target.value;
        count = 1;
    }

    firstCountQuantityFood.value = count;
   
    firstCountQuantityFood.style.visibility = "visible";
    e.preventDefault();
}

let allFoodSelected = [];

class FoodContainer {

    constructor(countNumber, valueFood){
        this.countNumber = countNumber;
        this.valueFood = valueFood;
    }
}

function changeComponent(e) {
    
    allFoodSelected.push(new FoodContainer(count, currentFood));
    if (foodId === "second_component_food") {
        foodId = "third_component_food";
        countFoodId = "third_count_quantity";
    } else {
        foodId = "second_component_food";
        countFoodId = "second_count_quantity"
    }

    e.preventDefault();
}

function prepareRecipe(e){
    let recipeFormula = document.getElementById('formula_recipe');
    // console.log(recipeFormula);



    e.preventDefault();
}