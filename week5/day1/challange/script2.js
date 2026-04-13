// 🔑 Add your API key here
const API_KEY = "c83159cd214babd084d6517a";

// DOM elements
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert");
const switchBtn = document.getElementById("switch");

// 🔄 Load all currencies into dropdowns
async function loadCurrencies() {
  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`);
    const data = await res.json();

    const currencies = data.supported_codes;

    currencies.forEach(currency => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.value = currency[0];
      option1.textContent = currency[0];

      option2.value = currency[0];
      option2.textContent = currency[0];

      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    });

  } catch (error) {
    result.textContent = "Error loading currencies";
    console.log(error);
  }
}

// 💱 Convert currency
async function convertCurrency() {
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amount) {
    result.textContent = "Enter an amount!";
    return;
  }

  try {
    result.textContent = "Loading...";

    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`
    );

    const data = await res.json();

    result.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;

  } catch (error) {
    result.textContent = "Error converting currency";
    console.log(error);
  }
}

// 🔄 Switch currencies
function switchCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
}

// 🎯 Event listeners
convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

// 🚀 Load currencies on page load
loadCurrencies();
