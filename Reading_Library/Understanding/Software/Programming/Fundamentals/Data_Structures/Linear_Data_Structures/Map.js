// Map: A collection of elements where each element
// is stored as a Key, Value pair where
// each key and value can hold both objects and primitive values.
// When we iterate over the map object it returns
// the key,value pair in the same order as inserted.

// Methods
/*

clear() – removes all elements from the map object.
 delete(key) – removes an element specified by the key. 
  It returns if the element is in the map, or false if it does not.
 entries() – returns a new Iterator object that contains 
  an array of [key, value] for each element in the map object. 
  The order of objects in the map is the same as the insertion order.
 forEach(callback[, thisArg]) – invokes a callback for each 
  key-value pair in the map in the insertion order. 
  The optional thisArg parameter sets the this value for each callback.
 get(key) – returns the value associated with the key. 
  If the key does not exist, it returns undefined.
 has(key) – returns true if a value associated with the key exists, 
  otherwise, return false.
 keys() – returns a new Iterator that contains the keys 
  for elements in insertion order.
 set(key, value) – sets the value for the key in the map object. 
  It returns the map object itself therefore you can chain this method with other methods.
 values() returns a new iterator object that contains values for 
  each element in insertion order.

*/

// Objects of individuals
let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };

// Create new map
let userRoles = new Map();

// console.log(typeof userRoles);  object
// console.log(userRoles instanceof Map); true

// Sets John as admin
userRoles.set(john, "admin");
// Same with lily and peter
userRoles.set(lily, "editor").set(peter, "subscriber");
// console.log(userRoles)

function displayTestMap() {
  let john = { name: "John Doe" },
    lily = { name: "Lily Bush" },
    peter = { name: "Peter Drucker" };

console.log("\n These are the objects: ",john,lily,peter)

  let userRoles = new Map();

  userRoles.set(john, "admin").set(lily, "editor").set(peter, "subscriber");

  console.log("\nThis is the map: ")
  iterateMapEntries(userRoles)
}

// Initialize with iterable object
let userRolesCombined = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

// console.log(userRolesCombined)

// Get john key
// console.log(userRoles.get(john)); // admin

// Check to see if a map has a key
// False throws an error
// console.log(userRoles.has(lily)); // true

// Check the map size
// console.log(userRoles.size); // 3

// Iterates over the map keys
// console.log("\n Iterating over the map keys\n")
function interateMapKeys() {
  for (let user of userRoles.keys()) {
    console.log(user.name);
  }
}

// Iterates over the map entries
// console.log("\n Iterating over the map entries\n")
function iterateMapEntries(map) {
  for (let elem of map.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
  }
}


// - Destructuring
// console.log("\n with destructuring\n");
function iterateMapEntriesDestructuring() {
  for (let [user, role] of userRoles.entries()) {
    console.log(`${user.name}: ${role}`);
  }
}

// Also can use forEach
// console.log("\n forEach \n");
function iterateMapEntriesForEach() {
  userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));
}

// Keys into an array
// console.log("\n Array of keys \n");
function keysIntoArray() {
  var keys = [...userRoles.keys()];
  console.log(keys);
}

// Delete an entry
userRoles.delete(john);

// Clear all entries in a map
userRoles.clear();

/*
A WeakMap is similar to a Map except the keys of a WeakMap must be objects. It means that when a reference to a key (an object) is out of scope, the corresponding value is automatically released from the memory.

A WeakMap only has subset methods of a Map object:

 get(key)
 set(key, value)
 has(key)
 delete(key)
Here are the main difference between a Map and a WeekMap:

Elements of a WeakMap cannot be iterated.
Cannot clear all elements at once.
Cannot check the size of a WeakMap. */

module.exports = { displayTestMap };


// References https://www.javascripttutorial.net/es6/javascript-map/