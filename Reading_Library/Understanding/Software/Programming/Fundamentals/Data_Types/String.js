// STRING: Set of characters that can also contain spaces and numbers
//  - Immutable
//  - .length
//  - Indexable
//  - Escapable "Ben\'s"

var string = "Hello, my name is Jeff";
var string2 = "Jeff's \vnext \tbest \ffriend isn\b \nBen\\Jim";
function printStrings() {
  console.log(string);
  console.log(string2);
  console.log(string.length);
  console.log(string[2]);
  console.log(string.indexOf("Jeff")); // Create own
  console.log(string.lastIndexOf("Jeff")); // Create own
  // https://www.w3schools.com/js/js_strings.asp
}
module.exports = { string };
