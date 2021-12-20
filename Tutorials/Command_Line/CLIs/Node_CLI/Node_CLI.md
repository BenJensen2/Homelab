# How to Build a Node CLI
Twilio blog node cli tutorial

## Steps
- project_root: npm init
- src/cli.js 
``` javascript 
export function cli(args) {
 console.log(args);
}
```
bin/create-project
```javascript
#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('../src/cli').cli(process.argv);
```
npm install esm

package.json
``` json
{
 "name": "@your_npm_username/create-project",
 "version": "1.0.0",
 "description": "A CLI to bootstrap my new projects",
 "main": "src/index.js",
 "bin": {
   "@your_npm_username/create-project": "bin/create-project",
   "create-project": "bin/create-project"
 },
 "publishConfig": {
   "access": "public"
 },
 "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1"
 },
 "keywords": [
   "cli",
   "create-project"
 ],
 "author": "YOUR_AUTHOR",
 "license": "MIT",
 "dependencies": {
   "esm": "^3.2.18"
 }
}
```
project_root: **npm link**

test: create-project

Output: ``` [ '/usr/local/Cellar/node/11.6.0/bin/node',
  '/Users/ben/dev/create-project/bin/create-project' ] ```

Test: create-project --yes

Output: ``` [ '/usr/local/Cellar/node/11.6.0/bin/node',
  '/Users/ben/dev/create-project/bin/create-project', '--yes'] ```

... To Be Continued

### [Project](../../../Projects/Command_Line/Node_CLI/Node_CLI.md)

### [Vision](../../../Vision/Command_Line/Node_CLI.md)

### Reverse Links
- [Command Line](../Command_Line.md)

#### References
- [How to Build a CLI with Node.js (twilio blog)](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
  - [Repo](https://github.com/dkundel/create-project)