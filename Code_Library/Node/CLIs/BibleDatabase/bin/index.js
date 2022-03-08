#! /usr/bin/env node
// ^ Shebang node environment script
// npm link to link bin command global

// ECMAScript Module Loader: Able to support modules in Node 6+
// Gives ES6 Functionality
// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module/*, options*/)

// Call main.js file with no arguements
require('../main').main();

