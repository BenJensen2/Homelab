exports.id = 'index';
module.exports = function(){}
const UTIL = require('./lib/util');

console.log('UTIL:', UTIL);

setImmediate(() => {
  console.log('The index.js module object is now loaded!', module)
});