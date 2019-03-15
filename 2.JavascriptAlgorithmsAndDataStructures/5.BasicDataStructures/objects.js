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

console.log(checkInventory("apples"));
