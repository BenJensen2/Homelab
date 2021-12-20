import React from 'react';
// import Github from './public/images/Github.png'

const StringType = (props) => {
  return (
    // STRING: Set of characters that can also contain spaces and numbers
    //  - Immutable
    //  - .length
    //  - Indexable
    //  - Escapable "Ben\'s"
    <div className="string">
      <a href="/Lessons/Data_Types"> Data Types </a>
      <h1>String</h1>
      <p>A String is a set of characters that can also contain spaces and numbers</p>
      <code>const string = "Hello, my name is Jeff";</code>
      <br />
      <br />
      {/* <img src={Github} alt=""/> */}
      <a
        href="https://github.com/BenJensen2/Fundamentals/blob/main/nodeModel/Data_Types/String.js">
        Github File
      </a>
    </div>
  )
}

export default StringType;