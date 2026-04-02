const sphereForm = document.getElementById('MyForm');

sphereForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const radius = document.getElementById('radius').value;
    const volumeInput = document.getElementById('volume');
    
    // Convert to number and calculate
    const r = parseFloat(radius);
    
    if (!isNaN(r)) {
        // Formula: (4/3) * PI * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        
        // Display result fixed to 2 decimal places
        volumeInput.value = volume.toFixed(2);
    } else {
        alert("Please enter a valid number for the radius.");
    }
});