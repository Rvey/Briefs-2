const jwt = require("jsonwebtoken");


const requireGAAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  const role = req.cookies.role;
  // check jwt exist
  if (token && role == "GA") {
    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/GAdminLogin");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/GAdminLogin");
  }
};
const requireCAAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  const role = req.cookies.role;
  const vocation = req.cookies.vocation;
  // check jwt exist
  if (token && role == "CA" && vocation == "no") {
    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/CAdminLogin");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else if (vocation == "yes") {
    res.render("../public/views/pages/CAdmin/vocation.ejs")
  } else {
    res.redirect("/CAdminLogin");
  }
};

const requireRAAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  const role = req.cookies.role;
  // check jwt exist
  if (token && role == "RA") {
    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/CRALogin");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/CRALogin");
  }
};

module.exports = { requireGAAuth, requireCAAuth, requireRAAuth };
