function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0; // Starting position
    
    // Set an interval to run every 1ms
    const id = setInterval(frame, 1);

    function frame() {
        // 400px (container width) - 50px (box width) = 350px
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.left = pos + "px"; // Move to the right
        }
    }
}
