//! TODO OPTIMIZED WAY TO MANAGE API END-POINT
const {
  redirect
} = require("./utils/utils");
const {
sendMail
} = require("./utils/ticket");
const fs = require('fs')
const http = require("http");
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("./controllers/usersController");
const {
  getPlans,
  getPlan,
  addPlan,
  updatePlan,
  deletePlan,
} = require("./controllers/plansController");
const {
  getAdmin
} = require("./controllers/adminController");
const server = http.createServer((req, res) => {
  /**
   * Path ROUTES
   *
   */
  

  // reservation path
  if (req.url === "/explore") {
    redirect("./views/pages/explore.ejs", res);
    // hpme path
  } else if (req.url === "/") {
    redirect("./views/index.ejs", res);
    // admin page
  } else if (req.url === "/adminPanel") {
    redirect("./views/pages/adminPanel.ejs", res);
  } else if (req.url === `/confirm`) {
    redirect("./views/pages/booking.ejs", res);
  } else if (req.url === `/login`) {
    redirect("./views/pages/loginPage.ejs", res);
  } else if (req.url === "/api/ticket" && req.method === 'POST') {
    sendMail(req , res)
    // console.log('dsdsdds');
    /**
     * API ROUTES
     *
     */

    // crud
  } else if (req.url === "/api/admins" && req.method === "GET") {
    getAdmin(req, res);
  } else if (req.url === "/api/plans" && req.method === "GET") {
    getPlans(req, res);
  } else if (req.url === "/api/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getPlan(req, res, id);
  } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getUser(req, res, id);
  } else if (req.url === "/api/user" && req.method === "POST") {
    addUser(req, res);
  } else if (req.url === "/api/plan" && req.method === "POST") {
    addPlan(req, res);
  } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deletePlan(req, res, id);
  } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deleteUser(req, res, id);
  } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updatePlan(req, res, id);
  } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateUser(req, res, id);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      message: "Route not Found"
    }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));