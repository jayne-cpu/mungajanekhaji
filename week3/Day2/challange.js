const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "gold", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector(".listPlanets");

for (let planet of planets) {
  // Create planet div
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");

  // Add color
  planetDiv.style.backgroundColor = planet.color;

  // Optional: show planet name
  planetDiv.textContent = planet.name;

  // Create moons
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    // Position moons randomly around planet
    moon.style.top = Math.random() * 80 + "px";
    moon.style.left = Math.random() * 80 + "px";

    planetDiv.appendChild(moon);
  }

  // Add planet to section
  section.appendChild(planetDiv);
}