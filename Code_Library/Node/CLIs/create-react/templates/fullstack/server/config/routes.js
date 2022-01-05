const controller = require("../controllers/controller");

module.exports = function (app) {
  app.get("/api/index", controller.index);
  app.get("/api/:type/all", controller.getAllByType);
  app.post("/api/:type/new", controller.create);
  app.get("/api/:type/single/:id", controller.getOneById);
  app.patch("/api/:type/update/single/:id", controller.update);
  // app.get("/api/item/:id", itemController.getitem);
  //   app.delete("/api/item/delete/:id", itemController.deleteitem);
  //   app.post("/api/item/login", itemController.login);
  //   axios.get(url[,{ withCredentials: true }])
};
