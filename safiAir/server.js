const http = require("http");
const { getUsers, getUser } = require("./controllers/usersController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getUser(req, res, id);
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not Found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
