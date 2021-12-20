# Javascript Unit Testing
Using jest

## Details
- index.js
  - Function with module export
- index.test.js
  ```js
  const getAboutUsLink = require("./index");
  test("Returns about-us for english language", () => {
      expect(getAboutUsLink("en-US")).toBe("/about-us");
  });
  ```

### Next Steps
- Learn how to mock

### References
- [How to Start unit testing your Javascript Code](https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/)