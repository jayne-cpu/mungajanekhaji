const button = document.getElementById("btn");
const card = document.getElementById("card");

// Function to show loading
function showLoading() {
  card.innerHTML = `
    <div class="spinner">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <p>Loading...</p>
  `;
}

// Function to show error
function showError() {
  card.innerHTML = `<p>❌ Error fetching data</p>`;
}

// Fetch character
async function getCharacter() {
  try {
    showLoading();

    // random id between 1–83
    const randomId = Math.floor(Math.random() * 83) + 1;

    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);

    if (!response.ok) {
      throw new Error("Failed request");
    }

    const data = await response.json();
    const character = data.result.properties;

    // Fetch homeworld
    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();

    const homeworld = homeworldData.result.properties.name;

    displayCharacter(character, homeworld);

  } catch (error) {
    showError();
    console.log(error);
  }
}

// Display data
function displayCharacter(char, homeworld) {
  card.innerHTML = `
    <h2>${char.name}</h2>
    <p><strong>Height:</strong> ${char.height}</p>
    <p><strong>Gender:</strong> ${char.gender}</p>
    <p><strong>Birth Year:</strong> ${char.birth_year}</p>
    <p><strong>Home World:</strong> ${homeworld}</p>
  `;
}

// Event listener
button.addEventListener("click", getCharacter);
