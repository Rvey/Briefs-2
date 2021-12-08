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
  /**
   * users Routes
   *
   */

  //   //* GET
  //   if (req.url === "/api/users" && req.method === "GET") {
  //     getUsers(req, res);
  //     //* GET
  //   } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
  //     const id = req.url.split("/")[3];
  //     getUser(req, res, id);
  //     //* POST
  //   } else if (req.url === "/api/user" && req.method === "POST") {
  //     addUser(req, res);
  //     //* PUT
  //   } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "PUT") {
  //     const id = req.url.split("/")[3];
  //     updateUser(req, res, id);
  //     //* DELETE
  //   } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "DELETE") {
  //     const id = req.url.split("/")[3];
  //     deleteUser(req, res, id);
  //   } else {
  //     res.writeHead(404, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify({ message: "Route not Found" }));
  //   }

  /**
   *
   * plans Routes
   *
   */
  // get
  switch (req.method === "GET") {
    case req.url === "/api/plans":
      getPlans(req, res);
      break;
    case req.url === "/api/users":
      getUsers(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not Found" }));
  }
  //post
  switch (req.method === "POST") {
    case req.url === "/api/plans":
      addPlan(req, res);
      break;
    case req.url === "/api/users":
      addUser(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not Found" }));
  }

  // put
  switch (req.method === "PUT") {
    case req.url === "/api/plans":
      updatePlan(req, res);
      break;
    case req.url === "/api/users":
      updateUser(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not Found" }));
  }

  // delete
  switch (req.method === "DELETE") {
    case req.url === "/api/plans":
      deletePlan(req, res);
      break;
    case req.url === "/api/users":
      deleteUser(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not Found" }));
  }
  //   //* GET
  //   if (req.url === "/api/plans" && req.method === "GET") {
  //     getPlans(req, res);
  //     //* GET
  //   } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "GET") {
  //     const id = req.url.split("/")[3];
  //     getPlan(req, res, id);
  //     //* POST
  //   } else if (req.url === "/api/plan" && req.method === "POST") {
  //     addPlan(req, res);
  //     //* PUT
  //   } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "PUT") {
  //     const id = req.url.split("/")[3];
  //     updatePlan(req, res, id);
  //     //* DELETE
  //   } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "DELETE") {
  //     const id = req.url.split("/")[3];
  //     deletePlan(req, res, id);
  //   } else {
  //     res.writeHead(404, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify({ message: "Route not Found" }));
  //   }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
