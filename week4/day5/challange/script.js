const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Submit form
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const category = input.value;

  if (!category) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`
    );

    const data = await response.json();

    // Get GIF URL
    const gifUrl = data.data.images.original.url;

    // Create elements
    const gifDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = gifUrl;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";

    // Delete specific GIF
    deleteBtn.addEventListener("click", () => {
      gifDiv.remove();
    });

    // Append elements
    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);
    container.appendChild(gifDiv);

  } catch (error) {
    console.log("Error fetching GIF:", error);
  }

  input.value = "";
});

// Delete all GIFs
deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
