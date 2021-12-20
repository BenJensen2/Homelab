# Performance
Optimizing Javascript performance

Upwork
- Preload all elements in the head section
- Minify Javascript code for smaller file sizes
  - Unuseful white spaces, commas, and comments
- Asynchornously load with Defer & Async
- Exclude unused components of .js libraries
- Use the HTTP/2 protocol
- Use a Javascript content delivery network (CDN)
- Gzip module for Apache, Nginx, and Node.js
- Position CSS and JavaScript code in head
- Where you can, use CSS3 effects in place of JavaScript
- Memory leaks
  - Use global variables sparingly & null or reassign them after use
  - 

W3
- Reduce activity in loops
  - Statements or assignmento that can be placed outside the loop will make the loop run faster.
- Reduce DOM access.
  -  Accessing the DOM is very slow
- Reduce DOM Size: Keep html elements small
- Avoid Unnecessary Variables
- Delay JavaScript Loading
  - Put script at the bottom of the page
  - ```window.onload = function(){}```
- Avoid using with
#### References
- [JavaScript Optimization Tips To Improve Performance in 2021 (Upwork)](https://www.upwork.com/resources/javascript-optimization-tips)
- [JavaScript Performance (W3)](https://www.w3schools.com/js/js_performance.asp)
- [Google RAIL performance measurement](https://web.dev/rail/)
- [12 Tips for Improving JavaScript Performance](https://nodesource.com/blog/improve-javascript-performance/)
- [How to Optimize JavaScript Performance](https://stackify.com/how-to-optimize-js-performance/)