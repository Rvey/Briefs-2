//! TODO OPTIMIZED WAY TO MANAGE API END-POINT
const { redirect } = require("./utils/utils");
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

const server = http.createServer((req, res) => {
  if (req.url === "/api/plans" && req.method === "GET") {
    getPlans(req, res);
  } else if (req.url === "/api/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url === "/reservation" && req.method === "GET") {
    redirect("./views/pages/reservation.ejs", res);
  } else if (req.url === "/" && req.method === "GET") {
    redirect("./views/index.ejs", res);
  } else if (req.url === "/adminPanel" && req.method === "GET") {
    redirect("./views/pages/adminPanel.ejs", res);
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
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not Found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
