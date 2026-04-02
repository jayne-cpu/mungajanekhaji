function hotelCost() {
  let nights;

  do {
    nights = prompt("How many nights?");
  } while (isNaN(nights) || nights === "");

  return nights * 140;
}

function planeRideCost() {
  let destination;

  do {
    destination = prompt("Enter destination:");
  } while (!destination);

  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost() {
  let days;

  do {
    days = prompt("How many days?");
  } while (isNaN(days) || days === "");

  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; // 5% discount
  }

  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  console.log(`Hotel: $${hotel}, Plane: $${plane}, Car: $${car}`);
  console.log(`Total: $${hotel + plane + car}`);
}

totalVacationCost();