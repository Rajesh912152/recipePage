let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};


let recipeTitleEl = document.getElementById("recipeTitle");
recipeTitleEl.classList.add("recipe-title");
recipeTitleEl.textContent = recipeObj.title;

let imgContainerEl = document.getElementById("imgContainer");
imgContainerEl.setAttribute("src", recipeObj.imgSrc);

let ingredientListContainer = document.getElementById("ingredientListContainer");
for (let ingredient of recipeObj.ingredients) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("ingredient");
    ingredientListContainer.appendChild(ingredientEl);

}