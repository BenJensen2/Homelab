// let crypto;
// try {
//   crypto = require('crypto');
//   console.log('Crypto is here')
// } catch (err) {
//   console.log('crypto support is disabled!');
// }

import { createHmac } from "crypto";

const secret = "abcdefg";
const hash = createHmac("sha256", secret)
  .update("I love cupcakes")
  .digest("hex");
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
