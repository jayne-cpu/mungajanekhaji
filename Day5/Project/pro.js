// 🎨 Colors
const colors = ["red", "blue", "green", "yellow", "black", "purple"];
let selectedColor = "black";

// 🖱️ Drawing state
let isDrawing = false;

// 🟦 Create palette
const palette = document.getElementById("palette");

colors.forEach(color => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;

    colorDiv.addEventListener("click", () => {
        selectedColor = color;
    });

    palette.appendChild(colorDiv);
});


// ⬜ Create grid
const grid = document.getElementById("grid");

for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Draw on hover IF mouse is down
    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            cell.style.backgroundColor = selectedColor;
        }
    });

    // Draw on click
    cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = selectedColor;
    });

    grid.appendChild(cell);
}


// 🖱️ Mouse events
document.body.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.body.addEventListener("mouseup", () => {
    isDrawing = false;
});
document.querySelectorAll(".cell").forEach(cell => {
    cell.style.backgroundColor = "cream";
});
selectedColor = "#" + Math.floor(Math.random()*16777215).toString(16);

