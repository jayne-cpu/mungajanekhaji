// Retrieve div
const div = document.getElementById("container");
console.log(div);

// Change Pete → Richard
document.querySelectorAll(".list")[0].children[1].textContent = "Richard";

// Delete Sarah (second li of second ul)
document.querySelectorAll(".list")[1].children[1].remove();

// Change first li of each ul to your name
const lists = document.querySelectorAll(".list");
for (let ul of lists) {
  ul.firstElementChild.textContent = "Jane";
}

// Add classes
for (let ul of lists) {
  ul.classList.add("student_list");
}
lists[0].classList.add("university", "attendance");

// Style div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide Dan
lists[1].lastElementChild.style.display = "none";

// Border Richard
lists[0].children[1].style.border = "1px solid black";

// Change font size
document.body.style.fontSize = "18px";