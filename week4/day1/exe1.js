const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display colors with numbering
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" exists
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}