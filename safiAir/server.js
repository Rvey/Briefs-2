const http = require("http");
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
} = require("./controllers/usersController");

const server = http.createServer((req, res) => {
    //* GET
  if (req.url === "/api/users" && req.method === "GET") {
    getUsers(req, res);
    //* GET
  } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getUser(req, res, id);
    //* POST
  } else if (req.url === "/api/user" && req.method === "POST") {
    addUser(req, res);
    //* PUT
  } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateUser(req, res, id);
    //* DELETE
  } else if (req.url.match(/\api\/user\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not Found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
