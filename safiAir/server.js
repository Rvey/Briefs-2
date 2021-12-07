const http = require("http");
const con = require("./config/db.config");
const users = require("./data/users.json");
const fs = require("fs");
// const users = require('./data/product')
const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "application/json");
  if (req.url === "/api/users" && req.method === 'GET') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not Found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));

