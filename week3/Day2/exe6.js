const nav = document.getElementById("navBar");

// Change id
nav.setAttribute("id", "socialNetworkNavigation");

// Create new li
const li = document.createElement("li");
const text = document.createTextNode("Logout");

li.appendChild(text);
nav.querySelector("ul").appendChild(li);

// First and last items
const ul = nav.querySelector("ul");

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);