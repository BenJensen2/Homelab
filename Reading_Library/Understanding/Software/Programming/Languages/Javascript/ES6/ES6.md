# ES6
ECMAScript (ES6) standards & Quirks

- Import modules options
  - ```"type": "module"``` in ```package.json ```
  - Give files extension ```.mjs```
  - ```import { hello } from './module.mjs';```

- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) vs [require](https://nodejs.org/api/modules.html)
  - Import statement is used to import read only live bindings which are exported by another module.
    - Javascript ES Module
    - There are Dynamic Imports ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import))
  - Require: [Module Scope](https://nodejs.org/api/modules.html)
    - Node.js Module
    - Can NOT require .mjs into Node
  - References
    - [Requiring modules in Node.js: Everything you need to know](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)

- [var vs let](https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/)
  - var: function or scoped
  - let: block scoped

- Hoisting
  - All function & variable declarations, in that order are compiled within their respective scope before any code is executed.
  - Only declarations are hoisted, all other logic is *left in place*
  - Function expressions are not hoisted
  - Subsequent function declarations *do* override previous ones.

- instanceof: Tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object

- Callbacks: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

#### References
- [ES6 Specification](https://262.ecma-international.org/6.0/)
- [Re-introduction to Javascript (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [You should be using ESM] (https://dev.to/bennypowers/you-should-be-using-esm-kn3)
