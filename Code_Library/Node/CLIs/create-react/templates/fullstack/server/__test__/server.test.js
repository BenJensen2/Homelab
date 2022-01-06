const server = require("../server");

test("Client port is 3000", () => {
  expect(server.clientPort).toBe("3000");
});
