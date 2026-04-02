(function(username) {
    const navbar = document.querySelector("nav");

    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <span>${username}</span>
        <img src="https://via.placeholder.com/30" alt="profile">
    `;

    navbar.appendChild(userDiv);
})("John");