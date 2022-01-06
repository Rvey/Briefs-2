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
    const { firstName, lastName, email, center } = req.body;

    // Validate user input
    if (!(email)) {
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
      password: (Math.random() + 1).toString(36).substring(8),
      token: token,
      center: center,
      vocation: 'no'
    });
    if (admin) {
      return res.status(201).json({ message: "center admin created successfully" });

    } else {
      res.json({ message: 'cannot create admin' })
    }
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
    res.status(201).json({ message: "center admin deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const UpdatePasswordLogin = async (req, res) => {
  try {
    const Admins = await CenterAdmin.getAll();

    const { password , newPassword } = req.body;

    // validate user creds
    if (!(password)) {
      return res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find((admin) => admin.password == password);

    if (CAdmin) {
      CAdmin.password = newPassword
      await CenterAdmin.update(CAdmin, CAdmin.id);
      return res.json({ message: `password updated successfully${CAdmin.id}` });
    }

  //   // create token
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
      res.status(201).send({ message: "password has been send to your email" });
    } else {
      res.json({ message: "wrong creds !" })
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

      const { firstName, lastName, email, password, center, token } = CAdmin;
      CAdmin.token = CToken;
      await CenterAdmin.update(CAdmin, CAdmin.id);

      res.status(200).json({ message: "logged in " });
    } else {

      res.status(400).send("Invalid Credentials");
    }
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
  UpdatePasswordLogin,
  login,
};
