// Part I: One-time alert after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: Add one paragraph after 2 seconds
setTimeout(addParagraph, 2000);

function addParagraph() {
    const container = document.getElementById('container');
    const newP = document.createElement('p');
    newP.textContent = "Hello World";
    container.appendChild(newP);
}

// Part III: Add a paragraph every 2 seconds until 5 exist or button is clicked
const intervalId = setInterval(addParagraphWithLimit, 2000);

function addParagraphWithLimit() {
    const container = document.getElementById('container');
    const paragraphs = container.querySelectorAll('p');

    // Check if we already have 5 paragraphs
    if (paragraphs.length >= 5) {
        clearInterval(intervalId);
    } else {
        const newP = document.createElement('p');
        newP.textContent = "Hello World";
        container.appendChild(newP);
    }
}

// Clear interval on button click
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});