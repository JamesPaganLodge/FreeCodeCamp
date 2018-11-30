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
  
  if (prop == "tracks" && value != "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value); // if the tracks property exists add the data to the array
    } else {
      collection[id][prop] = [value]; // if the tracks property doesnt exist then create it
    } 
  } else if (value != "") {      
      collection[id][prop] = value; // new key (prop) and value are added or the current value is updated
  } else {
    delete collection[id][prop]; // delete the key (prop) if the value is ""
  }
  
  return collection;
}

// tests
updateRecords(5439, "artist", "ABBA");
console.log(collection[5439]);

updateRecords(5439, "tracks", "Take a Chance on Me");
console.log(collection[5439]);

updateRecords(2548, "artist", "");
console.log(collection[2548]);
