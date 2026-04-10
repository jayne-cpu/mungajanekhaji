const toJs = () => {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
};
const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();

    const translation = [];

    for (let char of userInput) {
      if (char === " ") continue; // optional: skip spaces

      if (!morseJS[char]) {
        reject(`Error: Character "${char}" not found in Morse`);
        return;
      }

      translation.push(morseJS[char]);
    }

    resolve(translation);
  });
};
const joinWords = (morseTranslation) => {
  const output = morseTranslation.join("\n");

  // Display on the DOM
  document.body.innerText = output;
};
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));
  