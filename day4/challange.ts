// =======================
// 🌟 Types
// =======================

type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

type Data = User | Product | Order;


// =======================
// 🌟 Type Guard Functions (Advanced)
// =======================

function isUser(item: Data): item is User {
  return item.type === 'user';
}

function isProduct(item: Data): item is Product {
  return item.type === 'product';
}

function isOrder(item: Data): item is Order {
  return item.type === 'order';
}


// =======================
// 🌟 Main Function
// =======================

function handleData(data: Data[]): string[] {
  return data.map((item) => {

    if (isUser(item)) {
      return `👤 Hello ${item.name}, you are ${item.age} years old.`;
    }

    else if (isProduct(item)) {
      return `📦 Product ID: ${item.id}, Price: $${item.price}`;
    }

    else if (isOrder(item)) {
      return `🧾 Order ${item.orderId} has an amount of $${item.amount}`;
    }

    // Safety fallback (unexpected case)
    else {
      return "⚠️ Unknown data type encountered";
    }

  });
}


// =======================
// 🌟 Test Data (Mixed Array)
// =======================

const mixedData: Data[] = [
  { type: 'user', name: 'Jane', age: 22 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'ORD001', amount: 150 },
  // Edge case example:
  { type: 'user', name: 'John', age: 30 }
];


// =======================
// 🌟 Run
// =======================

const results = handleData(mixedData);

results.forEach(res => console.log(res));


// =======================
// ✅ Done!
// =======================
