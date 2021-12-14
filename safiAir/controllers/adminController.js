const Admin = require("../models/adminsModel");

// @desc Get all admin
// @route GET /api/admin
const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(admin));
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
    getAdmin,
  };