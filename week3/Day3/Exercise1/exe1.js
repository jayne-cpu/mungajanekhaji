// 1. Retrieve the h1 and console.log it
const h1 = document.querySelector('article h1');
console.log(h1);

// 2. Remove the last paragraph in the article
const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

// 3. Change h2 background to red on click
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

// 4. Hide h3 on click
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

// 5. Add a button to make all paragraphs bold
const boldBtn = document.createElement('button');
boldBtn.textContent = 'Make Text Bold';
document.body.appendChild(boldBtn);

boldBtn.addEventListener('click', () => {
    paragraphs.forEach(p => p.style.fontWeight = 'bold');
});

// BONUS 1: Hover h1 for random font size
h1.addEventListener('mouseover', () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = `${randomSize}px`;
});

// BONUS 2: Hover 2nd paragraph to fade out
const secondP = paragraphs[1];
secondP.addEventListener('mouseover', () => {
    secondP.style.transition = 'opacity 1s';
    secondP.style.opacity = '0';
});