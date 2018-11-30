var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  
  switch(prop) {
    case "artist":
      if (value == "")
        delete collection[id].artist;

      break;
    case "album":
    case "tracks":
  };
  
  return collection;
}

// tests
updateRecords(5439, "artist", "ABBA");
console.log(collection[5439]);

updateRecords(5439, "tracks", "Take a Chance on Me");
console.log(collection[5439]);

updateRecords(2548, "artist", "");
console.log(collection[2548]);
