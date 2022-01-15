const request = require("supertest");
const express = require("../web");

// Testing server response
describe("Test server", () => {
  test("Response code & message", () => {
    return request(express)
      .get("/server")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello from the Server!");
      });
  });
});

// Test environmental variables
describe("Test environmental variables", () => {
  test("Response code & secret key", () => {
    return request(express)
    .get("/env").then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("This is the: \"Test Secret Key\"")
    })
  })
})

// Test cookies
describe("Test cookie", () => {
  test("Response code & cookie", () => {
    return request(express)
    .get("/cookie").then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("{\"message\":\"This response has a cookie\"}")
    })
  })
})
