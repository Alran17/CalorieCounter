document.getElementById('add-meal-ingredient').addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'meal-ingredient';
    div.innerHTML = `
        <input type="text" placeholder="Ingredient name" class="meal-ingredient-name" required>
        <button type="button" class="remove-meal-ingredient">Remove</button>
    `;
    document.getElementById('meal-ingredients').appendChild(div);

    div.querySelector('.remove-meal-ingredient').addEventListener('click', () => {
        div.remove();
    });
});

document.getElementById('add-meal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const mealName = document.getElementById('meal-name').value;
    const ingredientNames = Array.from(document.querySelectorAll('.meal-ingredient-name')).map(input => input.value);

    const mealIngredients = [];
    for (const name of ingredientNames) {
        const ingredient = foods.find(food => food.name.toLowerCase() === name.toLowerCase());
        if (ingredient) {
            mealIngredients.push(ingredient);
        } else {
            alert(`Ingredient ${name} does not exist in the database`);
            return;
        }
    }

    const newMeal = {
        name: mealName,
        ingredients: mealIngredients.map(ingredient => ingredient.name)
    };

    if (meals.some(meal => meal.name.toLowerCase() === newMeal.name.toLowerCase())) {
        alert('Meal already exists');
    } else {
        meals.push(newMeal);
        alert('Meal added successfully');
        document.getElementById('add-meal-form').reset();
    }
});