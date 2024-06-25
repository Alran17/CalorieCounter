document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar-edit');
    const searchResults = document.getElementById('search-results-edit');
    const editIngredientForm = document.getElementById('edit-ingredient-form');

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = '';
        if (query.length >= 2) {
            foods.filter(food => food.name.toLowerCase().startsWith(query)).forEach(food => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.textContent = food.name;
                div.addEventListener('click', () => {
                    editIngredient(food);
                });
                searchResults.appendChild(div);
            });
        }
    });

    function editIngredient(food) {
        editIngredientForm.innerHTML = `
            <h3>Edit ${food.name}</h3>
            <label>Calories: <input type="number" id="calories" value="${food.calories}"></label>
            <label>Proteins: <input type="number" id="proteins" value="${food.proteins}"></label>
            <label>Fats: <input type="number" id="fats" value="${food.fats}"></label>
            <label>Carbs: <input type="number" id="carbs" value="${food.carbs}"></label>
            <label>Sugar: <input type="number" id="sugar" value="${food.sugar}"></label>
            <label>Sodium: <input type="number" id="sodium" value="${food.sodium}"></label>
            <label>Fiber: <input type="number" id="fiber" value="${food.fiber}"></label>
            <button id="save-ingredient">Save</button>
        `;
        document.getElementById('save-ingredient').addEventListener('click', () => {
            saveIngredient(food.name);
        });
    }

    function saveIngredient(name) {
        const updatedFood = {
            name,
            calories: parseInt(document.getElementById('calories').value),
            proteins: parseInt(document.getElementById('proteins').value),
            fats: parseInt(document.getElementById('fats').value),
            carbs: parseInt(document.getElementById('carbs').value),
            sugar: parseInt(document.getElementById('sugar').value),
            sodium: parseInt(document.getElementById('sodium').value),
            fiber: parseInt(document.getElementById('fiber').value)
        };
        const foodIndex = foods.findIndex(food => food.name === name);
        if (foodIndex !== -1) {
            foods[foodIndex] = updatedFood;
        }
        alert('Ingredient updated successfully');
    }
});