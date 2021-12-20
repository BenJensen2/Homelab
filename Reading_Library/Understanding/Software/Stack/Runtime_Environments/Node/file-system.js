const fs = require('fs');


console.log(fs.stat(`./hello-world.js`,(err, data) => {console.log(err, data)}))