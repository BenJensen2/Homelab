const Controller = require("../controllers/controller");
// const { authenticate } = require('../config/jwt.config.js');

module.exports = function (app) {
  app.get("/api/index", Controller.index);
//   app.get("/api/allUsers", UserController.getUsers);
//   app.get("/api/allUsers", authenticate, UserController.getUsers);
//   app.post("/api/user/new", UserController.createUser);
//   app.get("/api/user/:id", UserController.getUser);
//   app.delete("/api/user/delete/:id", UserController.deleteUser);
//   app.post("/api/user/login", UserController.login);
//   axios.get(url[,{ withCredentials: true }])
};