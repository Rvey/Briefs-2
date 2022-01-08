const RayonAdmin = require("../Models/AdminRayon");
const jwt = require("jsonwebtoken");
const sendMail = require("../../utils/mail");

const getAllAdmins = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();
    res.json(Admins);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getRayonAdminById = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();
    const AdminById = Admins.find((e) => e.id == req.params.id);
    if (!AdminById) {
      res.json({
        message: "Center Admin Not Found",
      });
    }
    res.json(AdminById);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const createAdminRayon = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, id_admin_center, rayon } =
      req.body;

    // Validate user input
    if (!(email)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const Admins = await RayonAdmin.getAll();

    const oldAdmin = Admins.find((admin) => admin.email == email);

    if (oldAdmin) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const token = jwt.sign({ email }, `${process.env.JWT_SECRET_KEY}`, {
      expiresIn: "2h",
    });

    // Create user in our database
    const admin = await RayonAdmin.createRayonAdmin({
      firstName,
      lastName,
      id_admin_center,
      rayon: rayon,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: (Math.random() + 1).toString(36).substring(8),
      token: token,
      role: "RA"
    });
    if (admin) {

      // return new user
      return res.status(201).json(admin);
    } else {
      res.json({ message: 'cannot create admin' })
    }
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const updateRayonAdmin = async (req, res) => {

  try {
    const Admins = await RayonAdmin.getAll();
    const RAdmin = Admins.find((admin) => admin.id == req.params.id);

    if (RAdmin) {
      // let { firstName, lastName, email, id_admin_center, rayon, password, token, role } = RAdmin;
      RAdmin.firstName = req.body.firstName;
      RAdmin.lastName = req.body.lastName;
      RAdmin.email = req.body.email;
      RAdmin.rayon = req.body.rayon;
      await RayonAdmin.update(RAdmin, req.params.id);
      res.json({
        message: "well updated",
      });

    }else {
      res.status(404)
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteRayonAdmin = async (req, res) => {
  try {
    await RayonAdmin.destroy(req.params.id);
    res.json({ message: "well deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const EmailLogin = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();

    const { email, password } = req.body;

    // validate user creds
    if (!(email)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const RAdmin = Admins.find((admin) => admin.email == req.body.email);

    if (RAdmin) {
      const url = 'CRAChangePass'
      await sendMail.sendMail(email, RAdmin.password, url);
      res.json({
        message: "Email has been send with your password",
      });
    }

    // create token
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const RAdmin = Admins.find(
      (admin) =>
        admin.email == req.body.email && admin.password == req.body.password
    );

    if (RAdmin) {
      const RAtoken = jwt.sign(
        {
          id: RAdmin.id,
        },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );

      const { firstName, lastName, email, rayon, password, token } = RAdmin;

      // save the new token
      RAdmin.token = RAtoken;

      await RayonAdmin.update(RAdmin, RAdmin.id);

      res.cookie('jwt', token, { httpOnly: true })
      res.cookie('role', RAdmin.role, { httpOnly: true })

      res.status(200).json(`welcome ${hours}`);
    } else {
      res.status(400).send("Invalid Credentials");
    }
    // create token
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllAdmins,
  getRayonAdminById,
  updateRayonAdmin,
  createAdminRayon,
  deleteRayonAdmin,
  EmailLogin,
  login,
};
