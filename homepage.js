document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');
    const selectedIngredient = document.getElementById('selected-ingredient');
    const ingredientList = document.getElementById('ingredient-list');
    const totalNutrition = {
        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0,
        sugar: 0,
        sodium: 0,
        fiber: 0
    };

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = '';
        if (query.length >= 2) {
            foods.filter(food => food.name.toLowerCase().startsWith(query)).forEach(food => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.textContent = food.name;
                div.addEventListener('click', () => {
                    selectIngredient(food);
                });
                searchResults.appendChild(div);
            });
        }
    });

    function selectIngredient(food) {
        selectedIngredient.innerHTML = `
            <h3>${food.name}</h3>
            <label for="weight">Weight (g):</label>
            <input type="number" id="weight" placeholder="Enter weight">
            <button id="add-ingredient">Add Ingredient</button>
        `;
        document.getElementById('add-ingredient').addEventListener('click', () => {
            const weight = parseFloat(document.getElementById('weight').value);
            if (!isNaN(weight)) {
                addIngredient(food, weight);
            }
        });
    }

    function addIngredient(food, weight) {
        const factor = weight / 100;
        const nutrition = {
            calories: Math.round(food.calories * factor),
            proteins: Math.round(food.proteins * factor),
            fats: Math.round(food.fats * factor),
            carbs: Math.round(food.carbs * factor),
            sugar: Math.round(food.sugar * factor),
            sodium: Math.round(food.sodium * factor),
            fiber: Math.round(food.fiber * factor)
        };

        ingredientList.innerHTML += `
            <div class="ingredient-item">
                <span>${food.name} (${weight}g)</span>
                <button class="remove-ingredient">Remove</button>
            </div>
        `;

        updateTotalNutrition(nutrition);
    }

    function updateTotalNutrition(nutrition) {
        totalNutrition.calories += nutrition.calories;
        totalNutrition.proteins += nutrition.proteins;
        totalNutrition.fats += nutrition.fats;
        totalNutrition.carbs += nutrition.carbs;
        totalNutrition.sugar += nutrition.sugar;
        totalNutrition.sodium += nutrition.sodium;
        totalNutrition.fiber += nutrition.fiber;

        document.getElementById('total-calories').textContent = totalNutrition.calories;
        document.getElementById('total-proteins').textContent = totalNutrition.proteins;
        document.getElementById('total-fats').textContent = totalNutrition.fats;
        document.getElementById('total-carbs').textContent = totalNutrition.carbs;
        document.getElementById('total-sugar').textContent = totalNutrition.sugar;
        document.getElementById('total-sodium').textContent = totalNutrition.sodium;
        document.getElementById('total-fiber').textContent = totalNutrition.fiber;
    }
});