const Auth = require("../Models/Auth");
const jwt = require("jsonwebtoken");
const sendMail = require("../../utils/mail");

const EmailLogin = async (req, res) => {
  try {
    const Admins = await Auth.findAllAdmins();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find((admin) => admin.email == req.body.email);

    if (CAdmin) {
      await sendMail.sendMail(email, CAdmin.password);
      return res.json({ message: "Email has been send with your password" });
    }

    // create token
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const Admins = await Auth.findAllAdmins();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const Admin = Admins.find(
      (admin) =>
        admin.email == req.body.email && admin.password == req.body.password
    );

    if (Admin) {
      const token = jwt.sign(
        { id: Admin.id },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );
      await Auth.update(token, Admin.id);
      res.cookie('jwt', token, { httpOnly: true })
      res.cookie('role', Admin.role, { httpOnly: true })
      res.status(201).send({
        ok: true,
        message: "Login successful"
      })

    } else {

      res.status(400).json({ error: 'wrong creds' });
    }
    // create token
  } catch (error) {
    res.json({ message: error.message });
  }

};
const logout = async (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.cookie('role', '')
  res.redirect('/login')
}

module.exports = {
  login,
  EmailLogin,
  logout
  // UpdatePasswordLog  in,
};
