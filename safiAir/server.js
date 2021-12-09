//! TODO OPTIMIZED WAY TO MANAGE API END-POINT
const { redirect } = require("./utils/utils");
const http = require("http");
const ejs = require("ejs");
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

  // //* GET
  // if (req.url === "/api/users" && req.method === "GET") {
  //   getUsers(req, res);
  //   //* GET
  // } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
  //   const id = req.url.split("/")[3];
  //   getUser(req, res, id);
  //   //* POST
  // } else if (req.url === "/api/user" && req.method === "POST") {
  //   addUser(req, res);
  //   //* PUT
  // } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "PUT") {
  //   const id = req.url.split("/")[3];
  //   updateUser(req, res, id);
  //   //* DELETE
  // } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "DELETE") {
  //   const id = req.url.split("/")[3];
  //   deleteUser(req, res, id);
  // } else {
  //   res.writeHead(404, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Route not Found" }));
  // }

  /**
   *
   * plans Routes
   *
   */

  //   // get
  //   switch (req.method === "GET") {
  //     case req.url === "/api/plans":
  //       getPlans(req, res);
  //       break;
  //     case req.url === "/api/users":
  //       getUsers(req, res);
  //       break;
  //     default:
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify({ message: "Route not Found" }));
  //   }
  //   //post
  //   switch (req.method === "POST") {
  //     case req.url === "/api/plan":
  //       addPlan(req, res);
  //       break;
  //     case req.url === "/api/user":
  //       addUser(req, res);
  //       break;
  //     default:
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify({ message: "Route not Found" }));
  //   }

  //   // put
  //   switch (req.method === "PUT") {
  //     case req.url === "/api/plan":
  //       updatePlan(req, res);
  //       break;
  //     case req.url === "/api/user":
  //       updateUser(req, res);
  //       break;
  //     default:
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify({ message: "Route not Found" }));
  //   }

  //   // delete
  //   switch (req.method === "DELETE") {
  //     case req.url === "/api/plans":
  //       deletePlan(req, res);
  //       break;
  //     case req.url === "/api/users":
  //       deleteUser(req, res);
  //       break;
  //     default:
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify({ message: "Route not Found" }));
  //   }

  // let path = "./views/";

  // let path = "./views/";

  //* GET
  // if (req.method === "GET") {
  // if (req.url === "/api/plans") {
  //   getPlans(req, res);
  // } else if (req.url === "/api/users") {
  //   getUsers(req, res);
  // }else if (req.url === "/reservation") {
  //   res.setHeader("Content-Type", "text/html");
  //   path += "pages/reservation.ejs";
  //   // res.statusCode = 200;
  // }

  if (req.url === "/api/plans" && req.method === "GET") {
    getPlans(req, res);
  } else if (req.url === "/api/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url === "/reservation" && req.method === "GET") {
    redirect("./views/pages/reservation.ejs", res);
  } else if (req.url === "/" && req.method === "GET") {
    redirect("./views/index.ejs", res);
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

  // switch (req.url) {
  //   case "/api/plans":
  //     getPlans(req, res);
  //     break;
  //   case "/api/users":
  //     getUsers(req, res);
  //     break;
  //   case "/":
  //     // let home = "./views/index.ejs";
  //     redirect("./views/index.ejs", res);
  //     break;
  //   case "/reservation":
  //     redirect("./views/pages/reservation.ejs", res);
  //     break;
  //   case "/adminPanel":
  //     redirect("./views/pages/adminPanel.ejs");
  //     break;
  //     case req.url.match(/\api\/plan\/([0-9]+)/) :
  //    getPLan(req.url.split("/")[3])
  //   default:
  //     break;
  // }
  // }

  // else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "GET") {
  //   const id = req.url.split("/")[3];
  //   getPlan(req, res, id);
  //   //* POST
  // }

  //  if (req.url === "/api/plan" && req.method === "POST") {
  //   addPlan(req, res);
  //   //* PUT
  // } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "PUT") {
  //   const id = req.url.split("/")[3];
  //   updatePlan(req, res, id);
  //   //* DELETE
  // } else if (req.url.match(/\api\/plan\/([0-9]+)/) && req.method === "DELETE") {
  //   const id = req.url.split("/")[3];
  //   deletePlan(req, res, id);
  // } else {
  //   res.writeHead(404, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Route not Found" }));
  // }

  // res.setHeader("Content-Type", "text/html");

  // switch (req.url) {
  //   case "/":
  //     res.statusCode = 200;
  //     break;
  //   case "/reservation":
  //     path += "pages/reservation.ejs";
  //     res.statusCode = 200;
  //     break;
  //   case "/admin":
  //     path += "pages/adminPanel.ejs";
  //     res.statusCode = 200;
  //     break;
  //   case "/check-out":
  //     res.statusCode = 301;
  //     res.setHeader("Location", "/checkout");
  //     res.end();
  //     break;
  //   default:
  //     path += "404.ejs";
  //     res.statusCode = 404;
  //     break;
  // }

  // ejs.renderFile(path, {}, function (err, str) {
  //   // str => Rendered HTML string
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     res.end(str);
  //   }
  // });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
