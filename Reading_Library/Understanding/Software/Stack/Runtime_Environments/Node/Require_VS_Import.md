# Require VS Import

## Details
[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) vs [require](https://nodejs.org/api/modules.html)
- import: CommonJS with module.exports
  - Lexical: Gets sorted to the top of the file
  - import will be run in the beginning of the file, always
  - import can be used to selectively load parts you need, and can save memory
  - Statement used to import read only live bindings which are exported by another module.
    - There are Dynamic Imports ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import))
  - asynchronous, which apparently perform better
- require: [Module Scope](https://nodejs.org/api/modules.html)
    - Node.js Module
    - Can NOT require .mjs into Node
  - synchronous
  - Can be called anytime and anywhere
  - exports
    - Can put as many attributes as you want in the exports object and can actually change the whole object to be something else
    - exports in each module is just a reference to module.exports which manages the exported properties
  - The module.exports object in every module is what the require function returns when we require that module. 

### References
- [Javascript's import vs require?](https://dev.to/ckim328/javascript-s-import-vs-require-4nm3)
- [Require vs Import](https://www.educba.com/require-vs-import/)
- [ES6 Modules](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)
- [Requiring modules in Node.js: Everything you need to know](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
- [Javascript Require vs Import (Flexiple)](https://flexiple.com/javascript-require-vs-import/)
- [How to use MJS files in Node.js (Dev To)](https://dev.to/bennycode/how-to-use-mjs-files-in-node-js-23ep)
- [How do I include a JavaScript file in another JavaScript file? (Stack Overflow)](https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file)


### Reverse Links
- [Node](./Node.md)