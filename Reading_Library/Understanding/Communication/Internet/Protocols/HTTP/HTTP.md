# HTTP Protocol
Foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. 

## Messages
Textual information encoded in ASCII, and span over multiple lines
Types
- Request: sent by the client to trigger an action on the server
- Response: answer from the server.

Structure
- Start Line
- Header
- Blank Line
- Body

## Request Methods
- GET: Retrieve Data
- HEAD: Requests only headers
- POST: Sends data to the server
- PUT: Creates a new resource or replaces a representation of the target resource with the request payload.
- DELETE: Deletes specified resource
- CONNECT: Starts two-way communications with the requested resource.
- OPTIONS: 
- TRACE
- PATCH

#### References
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

#### Reverse Links
- [Communication](../../../Communication.md)