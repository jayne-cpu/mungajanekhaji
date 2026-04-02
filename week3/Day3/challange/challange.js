const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

// Array of story templates using placeholders
const stories = [
    "The [adjective] [noun] decided to [verb] with [person] in [place]. It was weird.",
    "[person] traveled all the way to [place] just to [verb] a very [adjective] [noun].",
    "In the middle of [place], a [adjective] [noun] started to [verb] while [person] watched in shock!"
];

// Function to generate the story
function generateStory(event) {
    event.preventDefault();

    // Get values
    const noun = document.getElementById('noun').value.trim();
    const adj = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Validation
    if (noun === "" || adj === "" || person === "" || verb === "" || place === "") {
        alert("Please fill in all the blanks!");
        return;
    }

    // Pick a random story template
    const randomIndex = Math.floor(Math.random() * stories.length);
    let chosenStory = stories[randomIndex];

    // Replace placeholders with actual values
    const finalStory = chosenStory
        .replace("[noun]", noun)
        .replace("[adjective]", adj)
        .replace("[person]", person)
        .replace("[verb]", verb)
        .replace("[place]", place);

    storySpan.textContent = finalStory;
}

// Event Listeners
form.addEventListener('submit', generateStory);
shuffleBtn.addEventListener('click', generateStory);