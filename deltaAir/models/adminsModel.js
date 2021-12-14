const con = require("../config/db.config");
const findAll = () => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM admins`, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};
module.exports = {
    findAll
  };
  