const controller = require("../controllers/controller");

module.exports = function (app) {
  app.get("/api/index", controller.index);
  app.get("/api/:type/all", controller.readAll);
  app.post("/api/:type/new", controller.create);
  app.get("/api/:type/single/:id", controller.read);
  app.patch("/api/:type/update/:id", controller.update);
  app.delete("/api/:type/delete/:id",controller.delete)
  //   app.delete("/api/item/delete/:id", itemController.deleteitem);
};
