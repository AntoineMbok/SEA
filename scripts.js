/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// scripts.js

// Initial pizza recipes data
let pizzaRecipes = [
    {
        name: "Margherita",
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
        description: "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
        image: "https://www.simplyrecipes.com/thmb/-vNjNlr4sLNLYF3PSJf4Ycav0H0=/400x300/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-margherita-pizza-lead-4-600-e2d85d8e6a4c40318fc2dbcf4a99a654.jpg"
    },
    {
        name: "Pepperoni",
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni Slices"],
        description: "A classic pizza topped with tomato sauce, mozzarella cheese, and pepperoni slices.",
        image: "https://www.simplyrecipes.com/thmb/ATM6XesfF_SQ7i0x7efW6bKYHg0=/400x300/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__02__PepperoniPizza-LEAD-3-2a5e8d61dd0246a397d764f91e8b161b.jpg"
    },
    // Add more pizza recipes here
];

// Function to display pizza recipes
function displayPizzaRecipes() {
    const pizzaList = document.getElementById("pizzaList");
    pizzaList.innerHTML = "";
    pizzaRecipes.forEach(pizza => {
        const pizzaCard = document.createElement("div");
        pizzaCard.classList.add("pizza-card");
        pizzaCard.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}">
            <h2>${pizza.name}</h2>
            <p>${pizza.description}</p>
            <p><strong>Ingredients:</strong> ${pizza.ingredients.join(", ")}</p>
        `;
        pizzaList.appendChild(pizzaCard);
    });
}

// Function to add a new pizza recipe
function addPizza() {
    const nameInput = document.getElementById("nameInput").value;
    const ingredientsInput = document.getElementById("ingredientsInput").value.split(",").map(ingredient => ingredient.trim());
    const descriptionInput = document.getElementById("descriptionInput").value;
    const imageInput = document.getElementById("imageInput").value;

    if (nameInput && ingredientsInput.length > 0 && descriptionInput && imageInput) {
        const newPizza = {
            name: nameInput,
            ingredients: ingredientsInput,
            description: descriptionInput,
            image: imageInput
        };
        pizzaRecipes.push(newPizza);
        displayPizzaRecipes();
        // Clear input fields
        document.getElementById("nameInput").value = "";
        document.getElementById("ingredientsInput").value = "";
        document.getElementById("descriptionInput").value = "";
        document.getElementById("imageInput").value = "";
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to search for pizza recipes by name
function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = pizzaRecipes.filter(pizza => pizza.name.toLowerCase().includes(searchTerm));
    displayPizzaRecipes(filteredRecipes);
}

// Function to filter pizza recipes by ingredient
function filterByIngredient() {
    const selectedIngredient = document.getElementById("ingredientFilter").value;
    if (selectedIngredient) {
        const filteredRecipes = pizzaRecipes.filter(pizza => pizza.ingredients.includes(selectedIngredient));
        displayPizzaRecipes(filteredRecipes);
    }
}

// Function to reset filters and display all pizza recipes
function resetFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("ingredientFilter").selectedIndex = 0;
    displayPizzaRecipes();
}

// Function to populate the ingredient filter dropdown
function populateIngredientFilter() {
    const ingredientFilter = document.getElementById("ingredientFilter");
    const ingredients = pizzaRecipes.reduce((acc, pizza) => {
        pizza.ingredients.forEach(ingredient => {
            if (!acc.includes(ingredient)) {
                acc.push(ingredient);
            }
        });
        return acc;
    }, []);
    ingredients.forEach(ingredient => {
        const option = document.createElement("option");
        option.value = ingredient;
        option.textContent = ingredient;
        ingredientFilter.appendChild(option);
    });
}

// Call necessary functions on page load
document.addEventListener("DOMContentLoaded", () => {
    displayPizzaRecipes();
    populateIngredientFilter();
});
