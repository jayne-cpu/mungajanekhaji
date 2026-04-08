const marioGame = {
  "detail": "An amazing game!",
  "characters": {
    "mario": {
      "description": "Small and jumpy. Likes princesses.",
      "height": 10
    }
  }
};

const marioGameJSON = JSON.stringify(marioGame);
console.log(marioGameJSON);

const prettyJSON = JSON.stringify(marioGame, null, 2);
console.log(prettyJSON);
