module.exports = (app) => {
  const {
    requireGAAuth,
    requireCAAuth,
    requireRAAuth,
  } = require("../middleware/GAdmin");
  const promotionController = require("../api/Controllers/PromotionController");
  const CAdminController = require("../api/Controllers/CAdminController");
  const RAdminController = require("../api/Controllers/RAdminController");
  const Admin = require("../api/Controllers/AdminAuthController");
  const Products = require("../api/Controllers/ProductsController.js");
  const Rayon = require("../api/Controllers/rayonController");
  const logs = require("../api/Controllers/logController");

  // admin
  app.post("/login", Admin.login);
  app.get("/logout", Admin.logout);

  // logs
  app.post('/log', logs.createLog)
  app.get('/log', logs.getAllLog)

  // PROMOTION
  app.get("/promotion", promotionController.getAllPromotions);
  app.post("/promotion", promotionController.createPromotion);
  app.get("/promotion/:id", promotionController.getPromotionById);
  app.put("/updatePromo/:id", promotionController.updatePromotion);
  app.delete("/deletePromo/:id", promotionController.deletePromotion);
  app.put("/updatePromoStatus/:id", promotionController.updateStatus);
  app.put("/updatePSOnLogin/:id", promotionController.updateStatusOnLogin);

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

  // Products routes
  app.get("/Products", Products.getAllProducts);
  app.get("/Product/:id", Products.getProductById);

  // rayon
  app.get("/rayon", Rayon.getAllRayons);

  // view general admin  routes
  app.get("/GAdminLogin", (req, res) => {
    res.render("../public/views/pages/GAdmin/login.ejs");
  });
  app.get("/GAdminDash", requireGAAuth, (req, res) => {
    if (req.cookies.role == "GA") {
      res.render("../public/views/pages/GAdmin/GAdminPage.ejs");
    } else {
      res.render("../public/views/pages/GAdmin/login.ejs");
    }
  });
  app.get("/Statistics", requireGAAuth, (req, res) => {
    if (req.cookies.role == "GA") {
      res.render("../public/views/pages/GAdmin/Statisctics.ejs");
    } else {
      res.render("../public/views/pages/GAdmin/login.ejs");
    }
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

  app.get("/ManagePromotion", (req, res) => {
    if (req.cookies.role == "CA") {
      res.render("../public/views/pages/CAdmin/MPromotion.ejs");
    } else {
      res.render("../public/views/pages/CAdmin/login.ejs");
    }
  });
  app.get("/RChefManage", (req, res) => {
    if (req.cookies.role == "CA") {
      res.render("../public/views/pages/CAdmin/RAdminTable.ejs");
    } else {
      res.render("../public/views/pages/CAdmin/login.ejs");
    }
  });

  // view chef de rayon
  app.get("/CRAChangePass", (req, res) => {
    res.render("../public/views/pages/RAdmin/changePassword.ejs");
  });
  app.get("/CRAGetPassword", (req, res) => {
    res.render("../public/views/pages/RAdmin/getPassword.ejs");
  });
  app.get("/CRALogin", (req, res) => {
    res.render("../public/views/pages/RAdmin/login.ejs");
  });

  app.get("/promotionPanel", (req, res) => {
    if (req.cookies.role == "RA") {
      res.render("../public/views/pages/RAdmin/PromoHandleTable.ejs");
    } else {
      res.render("../public/views/pages/RAdmin/login.ejs");
    }
  });
};
