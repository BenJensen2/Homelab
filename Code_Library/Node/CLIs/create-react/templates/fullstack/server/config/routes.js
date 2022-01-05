const Controller = require("../controllers/controller");

module.exports = function (app) {
  app.get("/api/index", Controller.index);
  app.get("/api/:type/all", Controller.getAll);
  // app.get("/api/item/all", Controller.getAllItems);
  app.post("/api/:type/new", Controller.create);
  // app.get("/api/item/:id", itemController.getitem);
  //   app.delete("/api/item/delete/:id", itemController.deleteitem);
  //   app.post("/api/item/login", itemController.login);
  //   axios.get(url[,{ withCredentials: true }])
};
