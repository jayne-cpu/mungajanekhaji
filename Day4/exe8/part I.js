function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        document.body.innerHTML += `
        <p>The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}</p>`;
    }

    addIngredients("apple", "banana", "orange");
}

makeJuice("medium");