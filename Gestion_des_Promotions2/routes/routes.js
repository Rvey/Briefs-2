module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");
  const CAdminController = require("../api/Controllers/CAdminController");
  const RAdminController = require("../api/Controllers/RAdminController");
  const Admin = require("../api/Controllers/AdminAuthController");

  // admin
  app.post("/login", Admin.login);

  // PROMOTION
  app.get("/promotion", promotionController.getAllPromotions);
  app.post("/promotion", promotionController.createPromotion);
  app.get("/promotion/:id", promotionController.getPromotionById);
  app.put("/updatePromo/:id", promotionController.updatePromotion);
  app.delete("/deletePromo/:id", promotionController.deletePromotion);

  // centerAdmin route
  app.get("/adminCenter", CAdminController.getAllAdmins);
  app.post("/AdminCenter", CAdminController.createAdminCenter);
  app.get("/adminCenter/:id", CAdminController.getCenterAdminById);
  app.put("/UpdateAdminCenter/:id", CAdminController.updateCenterAdmin);
  app.delete("/DeleteAdminCenter/:id", CAdminController.deleteCenterAdmin);
  app.post("/validation/CA", CAdminController.EmailLogin);
  app.put("/updatePass/CA", CAdminController.UpdatePasswordLogin);
  app.post("/login/CA", CAdminController.login);

  // RayonAdmin routes
  app.get("/adminRayon", RAdminController.getAllAdmins);
  app.post("/AdminRayon", RAdminController.createAdminRayon);
  app.get("/adminRayon/:id", RAdminController.getRayonAdminById);
  app.put("/UpdateAdminRayon/:id", RAdminController.updateRayonAdmin);
  app.delete("/DeleteAdminRayon/:id", RAdminController.deleteRayonAdmin);
  app.post("/validation/RA", RAdminController.EmailLogin);
  app.post("/login/RA", RAdminController.login);

  // view general admin  routes
  app.get("/GAdminLogin", (req, res) => {
    res.render("../public/views/pages/GAdmin/login.ejs");
  });
  app.get("/GAdminDash", (req, res) => {
    res.render("../public/views/pages/GAdmin/GAdminPage.ejs");
  });
  app.get("/Statistics", (req, res) => {
    res.render("../public/views/pages/GAdmin/Statisctics.ejs");
  });
  app.get("/ManagePromotion", (req, res) => {
    res.render("../public/views/pages/GAdmin/MPromotion.ejs");
  });


  // view center admin routes
  app.get("/CAChangePass", (req, res) => {
    res.render("../public/views/pages/CAdmin/changePassword.ejs");
  });
  app.get("/CAGetPassword", (req, res) => {
    res.render("../public/views/pages/CAdmin/getPassword.ejs");
  });
  app.get("/CAdminLogin", (req, res) => {
    res.render("../public/views/pages/CAdmin/login.ejs");
  });
};
