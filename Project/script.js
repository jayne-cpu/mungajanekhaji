// script.js
const grid = document.getElementById('grid');
const palette = document.getElementById('palette');
const clearBtn = document.getElementById('clear-btn');

let selectedColor = 'black';
let isDrawing = false;

// 1. Create the Palette (21 colors)
const colors = [
    '#000000', '#464646', '#787878', '#990030', '#ed1c24', '#ff7f27', '#fff200', 
    '#22b14c', '#00a2e8', '#3f48cc', '#a349a4', '#ffffff', '#c3c3c3', '#b97a57', 
    '#ffaec9', '#ffc90e', '#efe4b0', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7'
];

// Arrange palette using Tailwind
palette.className = "flex flex-wrap gap-1 mb-6 p-2 bg-gray-100 rounded-md shadow-inner";

colors.forEach(color => {
    const div = document.createElement('div');
    // Tailwind classes for color options
    div.className = "w-8 h-8 cursor-pointer border border-gray-400 hover:scale-110 transition-transform rounded-sm";
    div.style.backgroundColor = color;
    div.addEventListener('click', () => selectedColor = color);
    palette.appendChild(div);
});

// 2. Generate the 24x24 Grid
// Arrange grid using Tailwind arbitrary values for 24 columns
grid.className = "grid grid-cols-[repeat(24,1fr)] w-fit border border-gray-300 bg-white";

for (let i = 0; i < 24 * 24; i++) {
    const square = document.createElement('div');
    // Tailwind classes for squares
    square.className = "w-5 h-5 border-[0.5px] border-gray-100";

    // Mousedown starts the drawing
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = selectedColor;
    });

    // Mouseover colors the square ONLY if the mouse is held down
    square.addEventListener('mouseover', () => {
        if (isDrawing) {
            square.style.backgroundColor = selectedColor;
        }
    });

    grid.appendChild(square);
}

// 3. Stop drawing when mouse is released anywhere on the screen
window.addEventListener('mouseup', () => isDrawing = false);

// 4. Clear Button Logic
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('#grid > div').forEach(sq => sq.style.backgroundColor = 'transparent');
});