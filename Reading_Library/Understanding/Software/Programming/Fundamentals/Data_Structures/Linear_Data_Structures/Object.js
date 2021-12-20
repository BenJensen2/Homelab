// OBJECTS are an unordered collection of related data, 
// of primitive or reference types, 
// in the form of "key:value" pairs
// Stores keyed collections
// Everything in Javascript is an object

const object = {
  'One': 1,
  "Two" : [1,2],
  3: "Three",
  "Four": "The Fourth"
}

// Different ways to display objects
//console.log(Object.entries(object)) // An array of each entry as an array [Key, Value]
//console.log(Object.keys(object)) // An array of all the keys
//console.log(Object.values(object)) // An array of all the values at their own index

//console.log("\n",object,"\n")

module.exports = { object }


// https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays