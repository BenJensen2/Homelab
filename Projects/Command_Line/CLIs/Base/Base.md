# Base CLI

This is the most basic CLI that will run on your computer

## Steps

- mkdir ProjectFolder
- npm init
- src/cli.js

```javascript
export function cli(args) {
  console.log(args);
}
```

- bin/base_cli

```javascript
#!/usr/bin/env node

require = require("esm")(module /*, options*/);
require("../src/cli").cli(process.argv);
```

- npm install esm
- package.json

```json
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
  "keywords": ["cli", "create-project"],
  "author": "YOUR_AUTHOR",
  "license": "MIT",
  "dependencies": {
    "esm": "^3.2.18"
  }
}
```
- npm link
  - creates global (-g) symlink in /usr/local/bin

There you have it!