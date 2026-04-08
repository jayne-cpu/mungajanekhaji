document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  const name = event.target.name.value;
  const lastname = event.target.lastname.value;

  // create object
  const data = {
    name: name,
    lastname: lastname
  };

  // convert to JSON string
  const jsonData = JSON.stringify(data);

  // display on DOM
  document.getElementById("output").textContent = jsonData;
});