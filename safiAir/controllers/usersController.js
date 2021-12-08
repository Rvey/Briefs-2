const Users = require("../models/usersModel");
const { v4: uuid } = require("uuid");
// @desc Get all users
// @route GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};

// @desc Get single user
// @route GET /api/users/id
const getUser = async (req, res, id) => {
  try {
    const user = await Users.findById(id);

    if (user) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "user not Found" }));
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc ADD user
// @route POST /api/user
const addUser = async (req, res) => {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
        const {name ,bookedPlaces , selectedPlan } = JSON.parse(body)
      const user = {
        name,
        bookedPlaces,
        selectedPlan,
      };
      const newUser = await Users.createUser(user);

      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newUser));
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
};
