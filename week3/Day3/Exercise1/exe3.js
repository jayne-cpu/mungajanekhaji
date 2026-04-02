// 1. Global variable
let allBoldItems;

// 2. Collect all bold items
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

// 3. Change color to blue
function highlight() {
    allBoldItems.forEach(item => item.style.color = 'blue');
}

// 4. Change color back to black
function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = 'black');
}

// 5. Event Listeners
const paragraph = document.querySelector('p');
getBoldItems(); // Initialize the variable

paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);