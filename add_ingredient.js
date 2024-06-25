document.getElementById('add-ingredient-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newIngredient = {
        name: document.getElementById('ingredient-name').value,
        calories: parseInt(document.getElementById('calories').value),
        proteins: parseInt(document.getElementById('proteins').value),
        fats: parseInt(document.getElementById('fats').value),
        carbs: parseInt(document.getElementById('carbs').value),
        sugar: parseInt(document.getElementById('sugar').value),
        sodium: parseInt(document.getElementById('sodium').value),
        fiber: parseInt(document.getElementById('fiber').value)
    };

    if (foods.some(food => food.name.toLowerCase() === newIngredient.name.toLowerCase())) {
        alert('Ingredient already exists');
    } else {
        foods.push(newIngredient);
        alert('Ingredient added successfully');
        document.getElementById('add-ingredient-form').reset();
    }
});