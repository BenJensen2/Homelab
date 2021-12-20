# Express
Fast, unopinionated, minimalist web framework for Node.js

## Basic Script
``` javascript
const port = 3000
const app = express()

// Bind application-level middleware to an instanc of the app object
app.use()

// GET request to homepage with 'Hello from the server!' response
app.get('/', function (req, res) {
  res.send('Hello from the server!')
})

// Binds & Listens for connections on the specified host & port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## Basic Routing
app.METHOD(PATH, HANDLER)
- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

## Application Generator
- express-generator: Create application skeleton

## Other Classes
- express.Router: URL router
- express.static: Static files
- app.all(): All types of requests (.get, .post, .put, .delete )
- app.route()

## Debugging
- DEBUG=express:* node index.js

### [Website](https://expressjs.com)

### Reverse Links
- [Web Frameworks](./Web_Frameworks.md)