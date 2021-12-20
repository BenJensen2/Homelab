# Javascript Modules

## ES modules are the future: Use them

- Node: package.json `"type": module"`
- Can't use with `require` unless extra steps
- Maintain Client-side JavaScript
- Also adopted by TypeScript with additions to define Type
- Widely used standard among developers

## `Require` & `Import` in the same document

- Node: package.json `"type": module"`
```js
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
```

## Types

- AMD: Asynchronous Module Definition
  - Don't require any bundlers
  - All dependencies are resolved dynamically.
  - use `require`
- CommonJS Modules
  - Node standard to encapsulade JavaScript modules
  - `modules.export` used to export
  - `import` used to import
- UMD: Universal Module Definition
  - Combo AMD + UMD
  - Syntax of CommonJS
  - Asynchronous of AMD
  - Suitable for both server-side & client-side.
- ESM ES Modules
  - ECMAScript Modules: Official standard used in JavaScript
  - `import` and `export`
  - Resolves CommonJS synchronous loading
  - Leads modules asynchronously while allowing static analysis on build time.

`require` vs `import`

- `require` used with Node to read & execute CommonJS

  - Can be called anywhere in code
  - Can be built-in or custom-written
  - If you are using `require` to get local modules, first export them with `modules.export`
    - Can also `export function`
  - Can be loaded conditionally or dynamically
  - Not synchronous: Loaded one by one

- `import` is an ES module with `export` and known as ES6 `import` & `export`
  - Can only be defined at the beginning of the file
  - We can't `import` or `export` outside ES modules
  - `export default moduleName;`
    - Can also `export const = getBlogContent = () => {};`
  - Static but allows detecting an error before running the application
  - Synchronous: loaded simultaneously improves large scale performance

```js
  // Require
  export.functionName () => {} // Function
  modules.export functionName; // End of document
  const http= require('http'); // Built-in
  const getBlogName = require('./blogDetails.js') // Custom

  // Import
  export const = functionName () => {} // Function
  export default functionName; // End of document
  import functionName from "./functionName.js;" // Import
```

#### References

- [JavaScript Require vs. Import (Medium)](https://blog.bitsrc.io/javascript-require-vs-import-47827a361b77)
- [How to use "Import" and "Require" in the Same File](https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/)
- [How to Import Json files in ES modules](https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/)