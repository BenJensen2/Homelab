console.clear()
console.log("Basic Javascript")

// Strings:
//  - Immutable
//  - .length
//  - Indexable
//  - Escapable "Ben\'s"
console.log("\n\nStrings\n")

var string1 = "Hello My Name is Jeff";
var string2 = "Jeff\'s \vnext \tbest \ffriend isn\b \nBen\\Jim";
console.log(string1)
console.log(string2)
console.log(string1.length)
console.log(string1[2])
console.log(string1.indexOf("Jeff")); // Create own
console.log(string1.lastIndexOf("Jeff")); // Create own
// https://www.w3schools.com/js/js_strings.asp

// Numbers
console.log("\n\nNumbers\n")

// Arrays []
console.log("\n\nArrays\n")


// Objects {}
// - Dictionaries
// - Frequency Tables
console.log("\n\nObjects\n")

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log("Their Last Name is:",person.lastName)
console.log("Their Last Name is:" + person.lastName) // Concatination
console.log(`Their Last Name is ${person.lastName}`) // Template Literal (backticks)

// Check object contains value:
console.log(person.hasOwnProperty("firstName"))

// Loop Through Object:
// - Old Way:
for (var property in person){
  if(person.hasOwnProperty(property)){
    console.log(`${property} is in there! `)
  }
}

// -ES6 (New Way): Convert to array
const keys = Object.keys(person)
console.log(keys)
const values = Object.values(person)
console.log(values)
const entries = Object.entries(person)
console.log(entries)
