// Add key-value pairs to javascript objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

//console.log(foods);
// ----------------------------------------------
// Modify an object nested within an object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

//console.log(userActivity);
// ----------------------------------------------
// Access property names with bracket notation
let newFoods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return newFoods[scannedItem];
}

//console.log(checkInventory("apples"));
// ----------------------------------------------
// Use the delete keyword to remove object properties
let moreFoods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete moreFoods.oranges;
delete moreFoods.plums;
delete moreFoods.strawberries;

//console.log(moreFoods);
// ----------------------------------------------
// Check if an object has a property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') && obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan');
}

//console.log(isEveryoneHere(users));
// ----------------------------------------------
// Iterate through the keys of an object with a for...in statement
let ittUsers = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let usersOnline = 0;
  
  for (let user in obj) {
    if(obj[user].online === true)
      usersOnline++;
  }

  return usersOnline;
}

//console.log(countOnline(ittUsers));
// ----------------------------------------------
// Generate an array of all object keys with object.keys()
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

//console.log(getArrayOfUsers(ittUsers));
// ----------------------------------------------
// Modify an array stored in an object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);

  return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));
