const con = require("../../config/db");

class centerAdmin {
  static async getAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM admin_center`, (err, res) => {
        if (err) throw err;
        resolve(res);
      });
    });
  }
  static async getCenterAdminById(id) {
    con.query(`SELECT FROM admin_center WHERE id =${id}`, (err, res) => {
      if (err) {
        throw err;
      }
      resolve(res);
    });
  }
  static create = async (admin_center) => {
    con.query("INSERT INTO admin_center SET ?", {
      firstName: admin_center.firstName,
      lastName: admin_center.lastName,
      email: admin_center.email,
      password: admin_center.password,
      token: admin_center.token,
      vocation: admin_center.vocation,
      center: admin_center.center
    });
  };
  static async update(admin_center, id) {
    con.query(`UPDATE admin_center SET ? WHERE id = ${id}`, {
      firstName: admin_center.firstName,
      lastName: admin_center.lastName,
      email: admin_center.email,
      password: admin_center.password,
      token: admin_center.token,
      vocation: admin_center.vocation,
      center: admin_center.center
    });
  }
  static async destroy(id) {
    con.query(`DELETE FROM admin_center WHERE id =${id}`, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}

module.exports = centerAdmin;
