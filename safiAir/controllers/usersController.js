const Users = require("../models/usersModel");

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
// @route GET /api/user/id
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

module.exports = {
  getUsers,
  getUser,
};
