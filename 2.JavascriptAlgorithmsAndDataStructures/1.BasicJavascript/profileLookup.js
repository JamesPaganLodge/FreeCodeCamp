var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {

}

console.log(lookUpProfile("Kristian", "lastname")); // return a property
console.log(lookUpProfile("Sherlock", "likes")); // return an array
console.log(lookUpProfile("Harry", "likes")); // return an array
console.log(lookUpProfile("Bob", "number")); // No such contact
console.log(lookUpProfile("Bob", "potato")); // No such contact
console.log(lookUpProfile("Akira", "address")); // No such property