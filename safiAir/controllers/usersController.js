const Users = require("../models/usersModel");
const { getUserData } = require("../utils/utils");

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
    const body = await getUserData(req);

    const { name, bookedPlaces, selectedPlan } = JSON.parse(body);
    const user = {
      name,
      bookedPlaces,
      selectedPlan,
    };
    const newUser = await Users.createUser(user);

    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
// @desc Update user
// @route update /api/user
const updateUser = async (req, res, id) => {
  try {
    const target = await Users.findById(id);

    if (target) {
      const body = await getUserData(req);

      const { name, bookedPlaces, selectedPlan } = JSON.parse(body);
      const user = {
        name: name || target.name,
        bookedPlaces: bookedPlaces || target.bookedPlaces,
        selectedPlan: selectedPlan || target.selectedPlan,
      };
      const updUser = await Users.updUser(user, id);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updUser));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "user not exist to be updated!" }));
    }
  } catch (error) {
    console.log(error);
  }
};
// @desc delete user
// @route DELETE /api/users/id
const deleteUser = async (req, res, id) => {
  try {
    const user = await Users.findById(id);

    if (user) {
      await Users.removeUser(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: `User has been deleted` }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "user not Found" }));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
