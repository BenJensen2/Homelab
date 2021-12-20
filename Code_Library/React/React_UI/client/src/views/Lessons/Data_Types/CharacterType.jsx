import React from 'react';

const CharacterType = (props) =>{
  return(
    <div className="character">
      {/* <a href="/Lessons/Data_Types"> Data Types </a> */}
      <h1>Character</h1>
      <p>A Character is a single letter , number, space, punctuation mark, or symbol that can be typed on a computer.</p>
      <code>const character = 'L';</code>
      <a
        href="https://github.com/BenJensen2/Fundamentals/blob/main/nodeModel/Data_Types/Character.js">
        Github File
      </a>
    </div>
  )
}

export default CharacterType;