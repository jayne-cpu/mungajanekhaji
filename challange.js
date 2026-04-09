const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};
const cloneGroceries = () => {

    // Copy primitive (string)
    let user = client;

    // Change client
    client = "Betty";

    console.log("client:", client); // Betty
    console.log("user:", user);     // John

    // Copy object (reference)
    let shopping = groceries;

    // Modify object
    shopping.totalPrice = "35$";

    console.log("groceries totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping totalPrice:", shopping.totalPrice);   // 35$

    // Modify nested object
    shopping.other.paid = false;

    console.log("groceries paid:", groceries.other.paid); // false
    console.log("shopping paid:", shopping.other.paid);   // false
};
displayGroceries();
cloneGroceries();
