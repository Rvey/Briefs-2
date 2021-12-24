const jwt = require("jsonwebtoken");
const CenterAdmin = require("../Models/centerAdmin");
const sendMail = require("../../utils/mail");

const getAllAdmins = async (req, res) => {
  try {
    const Admins = await CenterAdmin.getAll();
    res.json(Admins);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getCenterAdminById = async (req, res) => {
  try {
    const Admins = await CenterAdmin.getAll();
    const AdminById = Admins.find((e) => e.id == req.params.id);
    if (!AdminById) {
      res.json({ message: "Center Admin Not Found" });
    }
    res.json(AdminById);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createAdminCenter = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({ message: "All input is required" });
    }

    // check if user already exist
    // Validate if user exist in our database
    const Admins = await CenterAdmin.getAll();

    const oldAdmin = Admins.find((admin) => admin.email == email);

    if (oldAdmin) {
      return res
        .status(409)
        .json({ message: "User Already Exist. Please Login" });
    }

    const token = jwt.sign({ email }, `${process.env.JWT_SECRET_KEY}`, {
      expiresIn: "2h",
    });
    // Create user in our database
    const admin = await CenterAdmin.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: password,
      token: token,
    });

    res.status(201).json({ message: "center admin created successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const updateCenterAdmin = async (req, res) => {
  try {
    await CenterAdmin.update(req.body, req.params.id);
    res.json({
      message: "well updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
const deleteCenterAdmin = async (req, res) => {
  try {
    await CenterAdmin.destroy(req.params.id);
    res.json({ message: "well deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const EmailLogin = async (req, res) => {
  try {
    const Admins = await CenterAdmin.getAll();

    const { email, password } = req.body;

    // validate user creds
    if (!email) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find((admin) => admin.email == req.body.email);

    if (CAdmin) {
      await sendMail.sendMail(email, CAdmin.password);
      res.json({ message: "Email has been send with your password" });
    }

    // create token
  } catch (error) {
    res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const Admins = await CenterAdmin.getAll();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find(
      (admin) =>
        admin.email == req.body.email && admin.password == req.body.password
    );

    if (CAdmin) {
      const CToken = jwt.sign(
        { id: CAdmin.id },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );

      const { firstName, lastName, email, password, token } = CAdmin;
      CAdmin.token = CToken;
      await CenterAdmin.update(CAdmin, CAdmin.id);
      // res.cookie("centerAdmin", true, { maxAge: 1 });

      res.status(200).json({ message: "logged in " });
    }
    res.status(400).send("Invalid Credentials");
    // create token
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getAllAdmins,
  getCenterAdminById,
  updateCenterAdmin,
  createAdminCenter,
  deleteCenterAdmin,
  EmailLogin,
  login,
};
