const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://via.placeholder.com/100",
    alreadyRead: true
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://via.placeholder.com/100",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

for (let book of allBooks) {
  // Create container
  const div = document.createElement("div");

  // Add text (title + author)
  div.textContent = `${book.title} written by ${book.author}`;

  // Create image
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // If already read → make text red
  if (book.alreadyRead) {
    div.style.color = "red";
  }

  // Add image to div
  div.appendChild(img);

  // Add div to section
  section.appendChild(div);
}