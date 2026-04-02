let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// 1️⃣ displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();


// 2️⃣ cloneGroceries
const cloneGroceries = () => {

    // Copy of primitive (string)
    let user = client;

    // Change client
    client = "Betty";

    console.log("client:", client); // Betty
    console.log("user:", user);     // John

    // Explanation:
    // Strings are copied by VALUE → user keeps original value


    // Copy of object
    let shopping = groceries;

    // Modify object
    groceries.totalPrice = "35$";

    console.log("groceries totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping totalPrice:", shopping.totalPrice);   // 35$

    // Explanation:
    // Objects are copied by REFERENCE → both point to same object


    // Modify nested object
    groceries.other.paid = false;

    console.log("groceries paid:", groceries.other.paid); // false
    console.log("shopping paid:", shopping.other.paid);   // false

    // Explanation:
    // Nested objects are ALSO referenced → change affects both
};

cloneGroceries();