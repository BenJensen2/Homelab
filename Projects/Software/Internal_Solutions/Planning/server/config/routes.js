const Controller = require("../controllers/controller");

module.exports = function (app) {
  app.get("/api/item/all", Controller.getAllItems);
  app.post("/api/item/new", Controller.createItem);
  // app.get("/api/item/:id", itemController.getitem);
//   app.delete("/api/item/delete/:id", itemController.deleteitem);
//   app.post("/api/item/login", itemController.login);
//   axios.get(url[,{ withCredentials: true }])
};