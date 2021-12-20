# Logging
Node Logging

```javascript
console.log('Hello there');
console.error('Bye bye');
```

```
node index.js > hello.log 2> error.log
```

```
npm init -y
npm install express
```

```javascript
console.log('%O', req)
console.log('%s', req)
```

```
npm install pino express-pino-logger
```

```
LOG_LEVEL=debug node index.js
```

```
npm install --save-dev pino-pretty
LOG_LEVEL=debug node index.js | ./node_modules/.bin/pino-pretty
```

```
DEBUG=express:* nodemon index.js
```

```
npm install debug
```

```
DEBUG=mylib:randomid node index.js
```
```
npm install pino-debug pino-colada
```

```
npm install chalk
cli.js
CI=true node cli.js
```

```javascript
//isTTY: teletypewriter
console.log(process.stdout.isTTY);
```

```
node cli.js > output.log
cat output.log
```

## References
- [A Guide to Node.js Logging (Twilio)](https://www.twilio.com/blog/guide-node-js-logging)

### Reverse Links
- [Logging](../Logging.md)