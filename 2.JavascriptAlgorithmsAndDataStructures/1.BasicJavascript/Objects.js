var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
// ------------------------------------------
// Building javascript objects
var myDog = {
  "name": "Tiber",
  "legs": 4,
  "tails": 1,
  "friends": ["Daisy", "Sandy"]
};
// ------------------------------------------
// Accessing object properties with dot notation
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue + " " + shirtValue);
// ------------------------------------------
// Accessing object properties with bracket notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObk['the drink'];
// ------------------------------------------
// Accessing object properties with variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
// ------------------------------------------
// Updating object properties
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
// ------------------------------------------
// Add new properties to object
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "bow-wow";
// ------------------------------------------
// Delete properties from objects
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;
// ------------------------------------------
// Using objects for lookups
function phoneticLookup(val) {
  var result = "";

  /* Old Code 
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  */
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];

  return result;
}

phoneticLookup("alpha"); // returns Adams
// ------------------------------------------
// Testing objects for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  var result = "Not Found";

  if (myObj.hasOwnProperty(checkProp)) {
    result = myObj[checkProp];
  }

  return result;
}

checkObj("gift");
// ------------------------------------------
// Manipulating complex objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Main",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Metallica",
    "title": "St Anger",
    "release_year": 2003,
    "formats": [
      "CD",
      "MP3"
    ]
  }
];
// ------------------------------------------
// Accessing nested objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
}

var gloveBoxContents = myStorage.car.inside["glove box"];
// ------------------------------------------
// Accessing nested arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
