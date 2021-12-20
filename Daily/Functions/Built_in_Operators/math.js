// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

math = () => {
  console.log("Math.abs(-23): ",Math.abs(-23))
  console.log("Math.floor(-2.3): ",Math.floor(-2.3))
  console.log("Math.floor(2.3): ",Math.floor(2.3))
  console.log("Math.ceil(-2.3): ",Math.ceil(-2.3))
  console.log("Math.ceil(2.3): ",Math.ceil(2.3))
  console.log("Math.max(1,-4,5.2,8,29): ",Math.max(1,-4,5.2,8,29))
  console.log("Math.min(1,-4,5.2,8,29): ",Math.min(1,-4,5.2,8,29))
  console.log("Math.random(): ",Math.random())  // 0 to 1 Inclusive of 0 but not 1
  // Not cryptologically secure: Use window.crypto.getRandomValues()
  console.log("Math.round(5.3): ",Math.round(5.3))
  console.log("Math.round(5.76): ",Math.round(5.76))
  console.log("Math.sign(-28): ",Math.sign(-28))
  console.log("Math.sign(28): ",Math.sign(28))
  console.log("Math.sqrt(44): ",Math.sqrt(44))
  console.log("Math.sqrt(144): ",Math.sqrt(144))
  console.log("Math.exp(1): ",Math.exp(1))// returns e^x
  console.log("Math.expm1(1): ",Math.expm1(1))// returns e^x - 1
}

math()