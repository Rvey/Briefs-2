const con = require("../../config/db");

class AdminRayon {
  static async getAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM chef_rayon`, (err, res) => {
        if (err) throw err;
        resolve(res);
      });
    });
  }
  static  getRayonAdminById(id) {
    return new Promise((resolve, reject) => {
      con.query(`SELECT FROM chef_rayon WHERE id = ${id}`, (err, res) => {
        if (err) throw err;
        resolve(res);
      });
    });
  }
  static createRayonAdmin = async (admin_rayon) => {
    con.query("INSERT INTO chef_rayon SET ?", {
      firstName: admin_rayon.firstName,
      lastName: admin_rayon.lastName,
      email: admin_rayon.email,
      id_admin_center: admin_rayon.id_admin_center,
      rayon: admin_rayon.rayon,
      approvedPromo:0,
      role: admin_rayon.role,
      token: admin_rayon.token,
    });
  };
  static async update(RayonAdmin, id) {
    con.query(`UPDATE chef_rayon SET ? WHERE id = ${id}`, {
      firstName: RayonAdmin.firstName,
      lastName: RayonAdmin.lastName,
      email: RayonAdmin.email,
      id_admin_center: RayonAdmin.id_admin_center,
      rayon: RayonAdmin.rayon,
      role: RayonAdmin.role,
      approvedPromo:RayonAdmin.approvedPromo,
      token: RayonAdmin.token,
    });
  }
  static async destroy(id) {
    con.query(`DELETE FROM chef_rayon WHERE id =${id}`, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}

module.exports = AdminRayon;
