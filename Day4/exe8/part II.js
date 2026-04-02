function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        document.body.innerHTML += `
        <p>The client wants a ${size} juice, containing ${ingredients.join(", ")}</p>`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "pineapple", "kiwi");

    displayJuice();
}

makeJuice("large");