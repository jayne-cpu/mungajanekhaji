// 1. Retrieve the form
const form = document.querySelector('form');
console.log(form);

// 2. Retrieve inputs by ID
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput, lnameInput);

// 3. Retrieve inputs by name attribute
const fnameByName = document.getElementsByName('firstname')[0];
const lnameByName = document.getElementsByName('lastname')[0];
console.log(fnameByName, lnameByName);

// 4. Form submission logic
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page refresh

    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();
    const ul = document.querySelector('.usersAnswer');

    if (firstName !== "" && lastName !== "") {
        // Clear previous answers (optional)
        ul.innerHTML = ''; 

        // Create LIs
        const liFirst = document.createElement('li');
        liFirst.textContent = firstName;
        
        const liLast = document.createElement('li');
        liLast.textContent = lastName;

        ul.appendChild(liFirst);
        ul.appendChild(liLast);
    }
});