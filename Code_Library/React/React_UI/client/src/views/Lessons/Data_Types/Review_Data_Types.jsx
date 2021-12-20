import React from 'react';
import CharacterType from './CharacterType';

const Review_Data_Types = (props) => {
  return (
    <div>
      <h1> All Data Types</h1>
      <ul>
        <li>
          <CharacterType/>
        </li>
      </ul>
    </div>
  )
}

export default Review_Data_Types;



// function dataTypes() {
//   const { character } = require("./Character.js");
//   const { string } = require("./String.js");
//   const { integer } = require("./Integer.js");
//   const { float } = require("./Float.js");
//   const { boolean } = require("./Boolean.js");

//   console.log("\nDATA TYPES");
//   console.log("\n - Characters\n");
//   console.log(
//     "A character is any letter, number, space, punctuation mark, or symbol that can be typed on a computer."
//   );

//   console.log("\nThis is a Character:", character);

//   console.log("\n - Strings\n");
//   console.log(
//     "A string is a set of characters that can also contain spaces and numbers."
//   );

//   console.log("\nThis is a String:", string);

//   console.log("\n - Integers\n");
//   console.log("An integer is a whole number. Positive, negative or zero.");

//   console.log("\nThis is an Integer:", integer);

//   console.log("\n - Float\n");
//   console.log(
//     "A float is a number that contains a decimal point or a fraction."
//   );

//   console.log("\nThis is a Float:", float);

//   console.log("\n - Boolean\n");
//   console.log("A boolean is either true or false.");

//   console.log("\nThis is a Boolean:", boolean);
// }

// module.exports = {dataTypes}
