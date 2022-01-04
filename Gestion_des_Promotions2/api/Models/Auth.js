const con = require("../../config/db");

class Auth {
  static findAllAdmins = () => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM admin`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  };
  static async update(token, id) {
    con.query(`UPDATE admin SET ? WHERE id = ${id}`, {
      token: token,
    });
  }
}

module.exports = Auth;
