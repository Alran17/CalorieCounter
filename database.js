const foods = [
    { name: 'Potato', calories: 77, proteins: 2, fats: 0.1, carbs: 17, sodium: 6, sugar: 0.8, fiber: 2.2 },
    { name: 'Okra', calories: 33, proteins: 2, fats: 0.2, carbs: 7.5, sodium: 7, sugar: 1.5, fiber: 3.2 },
    { name: 'Ginger', calories: 80, proteins: 1.8, fats: 0.8, carbs: 18, sodium: 13, sugar: 1.7, fiber: 2 },
    { name: 'Parsley', calories: 36, proteins: 3, fats: 0.8, carbs: 6, sodium: 56, sugar: 0.9, fiber: 3.3 },
    { name: 'Thyme', calories: 101, proteins: 6, fats: 1.7, carbs: 24, sodium: 55, sugar: 1.7, fiber: 14 },
    { name: 'Sweet Potato', calories: 86, proteins: 1.6, fats: 0.1, carbs: 20.1, sodium: 55, sugar: 4.2, fiber: 3 },
    { name: 'Onion', calories: 40, proteins: 1.1, fats: 0.1, carbs: 9, sodium: 4, sugar: 4.2, fiber: 1.7 },
    { name: 'Bell Pepper', calories: 31, proteins: 1, fats: 0.3, carbs: 6, sodium: 2, sugar: 4.2, fiber: 2.1 },
    { name: 'Pepper', calories: 40, proteins: 2, fats: 0.4, carbs: 9, sodium: 7, sugar: 5, fiber: 1.5 },
    { name: 'Garlic', calories: 149, proteins: 6.4, fats: 0.5, carbs: 33, sodium: 17, sugar: 1, fiber: 2.1 },
    { name: 'Tomato', calories: 18, proteins: 0.9, fats: 0.2, carbs: 3.9, sodium: 5, sugar: 2.6, fiber: 1.2 },
    { name: 'Cherry Tomato', calories: 18, proteins: 0.9, fats: 0.2, carbs: 3.9, sodium: 5, sugar: 2.6, fiber: 1.2 },
    { name: 'Cucumber', calories: 15, proteins: 0.7, fats: 0.1, carbs: 3.6, sodium: 2, sugar: 1.7, fiber: 0.5 },
    { name: 'Lettuce', calories: 15, proteins: 1.4, fats: 0.2, carbs: 2.9, sodium: 28, sugar: 0.8, fiber: 1.3 },
    { name: 'Carrot', calories: 41, proteins: 0.9, fats: 0.2, carbs: 9.6, sodium: 69, sugar: 4.7, fiber: 2.8 },
    { name: 'Broccoli', calories: 34, proteins: 2.8, fats: 0.4, carbs: 6.6, sodium: 33, sugar: 1.7, fiber: 2.6 },
    { name: 'Cauliflower', calories: 25, proteins: 1.9, fats: 0.3, carbs: 5, sodium: 30, sugar: 1.9, fiber: 2 },
    { name: 'Cabbage', calories: 25, proteins: 1.3, fats: 0.1, carbs: 6, sodium: 18, sugar: 3.2, fiber: 2.5 },
    { name: 'Seasonings', calories: 'Varies', proteins: 'Varies', fats: 'Varies', carbs: 'Varies', sodium: 'Varies', sugar: 'Varies', fiber: 'Varies' },
    { name: 'Potato Leaves', calories: 20, proteins: 2, fats: 0.2, carbs: 4, sodium: 25, sugar: 0.5, fiber: 2.5 },
    { name: 'Cassava Leaves', calories: 40, proteins: 2.8, fats: 0.5, carbs: 7, sodium: 30, sugar: 0.8, fiber: 3.7 },
    { name: 'Spinach', calories: 23, proteins: 2.9, fats: 0.4, carbs: 3.6, sodium: 79, sugar: 0.4, fiber: 2.2 },
    { name: 'Black Eyed Beans', calories: 343, proteins: 23.5, fats: 2.3, carbs: 60.2, sodium: 28, sugar: 3.3, fiber: 10.6 },
    { name: 'Mango', calories: 60, proteins: 0.8, fats: 0.4, carbs: 15, sodium: 1, sugar: 13.7, fiber: 1.6 },
    { name: 'Banana', calories: 89, proteins: 1.1, fats: 0.3, carbs: 22.8, sodium: 1, sugar: 12.2, fiber: 2.6 },
    { name: 'Watermelon', calories: 30, proteins: 0.6, fats: 0.2, carbs: 8, sodium: 1, sugar: 6.2, fiber: 0.4 },
    { name: 'Pineapple', calories: 50, proteins: 0.5, fats: 0.1, carbs: 13, sodium: 1, sugar: 9.9, fiber: 1.4 },
    { name: 'Corn', calories: 86, proteins: 3.2, fats: 1.2, carbs: 19, sodium: 15, sugar: 6.3, fiber: 2.7 },
    { name: 'Peas', calories: 81, proteins: 5.4, fats: 0.4, carbs: 14.5, sodium: 5, sugar: 5.7, fiber: 5.1 },
    { name: 'Chicken Breast', calories: 165, proteins: 31, fats: 3.6, carbs: 0, sodium: 74, sugar: 0, fiber: 0 },
    { name: 'Chicken Leg', calories: 177, proteins: 22, fats: 9, carbs: 0, sodium: 87, sugar: 0, fiber: 0 },
    { name: 'Chicken Thigh', calories: 209, proteins: 20, fats: 13, carbs: 0, sodium: 84, sugar: 0, fiber: 0 },
    { name: 'Mackerel Fish', calories: 205, proteins: 18.6, fats: 13.9, carbs: 0, sodium: 90, sugar: 0, fiber: 0 },
    { name: 'Egg', calories: 155, proteins: 13, fats: 11, carbs: 1.1, sodium: 124, sugar: 1.1, fiber: 0 },
    { name: 'Meat', calories: 250, proteins: 26, fats: 15, carbs: 0, sodium: 72, sugar: 0, fiber: 0 },
    { name: 'Chicken Wings', calories: 203, proteins: 19, fats: 13.3, carbs: 0, sodium: 82, sugar: 0, fiber: 0 },
    { name: 'Duck Gizzard', calories: 94, proteins: 17.2, fats: 2.7, carbs: 0, sodium: 66, sugar: 0, fiber: 0 },
    { name: 'Chicken Gizzard', calories: 94, proteins: 17.7, fats: 2.7, carbs: 0, sodium: 68, sugar: 0, fiber: 0 },
    { name: 'Chicken Feet', calories: 215, proteins: 19, fats: 15.4, carbs: 0, sodium: 72, sugar: 0, fiber: 0 },
    { name: 'Red Palm Oil', calories: 884, proteins: 0, fats: 100, carbs: 0, sodium: 0, sugar: 0, fiber: 0 },
    { name: 'Green Onion', calories: 32, proteins: 1.8, fats: 0.2, carbs: 7.3, sodium: 16, sugar: 2.3, fiber: 2.6 },
    { name: 'Avocado', calories: 160, proteins: 2, fats: 15, carbs: 9, sodium: 7, sugar: 0.7, fiber: 7 },
    { name: 'Mushroom', calories: 22, proteins: 3.1, fats: 0.3, carbs: 3.3, sodium: 5, sugar: 1, fiber: 1 }
];

const meals = []

function getFoodByName(name) {
    return foods.find(food => food.name.toLowerCase() === name.toLowerCase());
}

