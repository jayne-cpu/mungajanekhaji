const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let suffix;

    if (index === 0) suffix = "st";
    else if (index === 1) suffix = "nd";
    else if (index === 2) suffix = "rd";
    else suffix = "th";

    console.log(`${index + 1}${suffix} choice is ${color}.`);
});