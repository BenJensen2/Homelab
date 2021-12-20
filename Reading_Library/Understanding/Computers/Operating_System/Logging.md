# Logging
System & Application Logging

## Types
- Infrastructure: DevOps & SysAdmins
  - Typically set to the equivalent of ERROR level with the ability to go to DEBUG by using special flags @ runtime
  - Examples: firewalls, syslog, servers(SQL), load balancers(NGINX)

- Application
  - 
## Default Streams
- stdin: Handles input that comes into you process
- stdout: Applications output
- stderr: Error Messages

## Pipes & Filters
- tee: reads standard input and writes it to both standard output and one or more files, effectively duplicating its input

## Command Line Operators
- (2>): redirects output of sdterr into a file

## Node Operators
- console.
  - util.format
    - %0: String representation of an object


## Log Levels
ALL > TRACE > DEBUG > INFO > WARN > ERROR > FATAL > OFF
- OFF: Nothing is produced
- FATAL: Fault will result in application terminating (i.e. Out of Memory)
- ERROR: Interruption or fault in processing but application will continue
- WARN & INFO: Not often used, submodules
- DEBUG: All log messages which the application can produce
- ALL & TRACE: Additional info, like every single call to a third-party system or application (Only needed when absolutely required)

## Piping & Transports

## Node.js Logging Libraries
- Pino
- Winston
- Bunyan: Not up to date
- Loglevel
- Npmlog

## Tools
- Front End
  - loglevel
  - browser-bunyan: Node.js logging module for the browser
- Frameworks
  - log4net
  - NLog
  - log4j
  - logback

### References
- [An introduction to logging for programmers](https://www.freecodecamp.org/news/you-should-have-better-logging-now-fbab2f667fac/)
- [Logging Levels 101](https://stackify.com/logging-levels-101/)
- [Why Application Logging is Critical to Your APM Strategy (Stackify)](https://stackify.com/application-logging-apm-strategy/)
- [Node.js Logging Tutorial (Stackify)](https://stackify.com/node-js-logging/)
- [5 Node.js Logging Libraries](https://geshan.com.np/blog/2021/01/nodejs-logging-library/)


### Reverse Links
- [Operating System](./Operating_System.md)