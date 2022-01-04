const con = require("../../config/db");

class Rayon {
  static async findAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM rayon`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  static async getRayonById(id) {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM rayon WHERE id=${id}`, (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      });
  }
}
module.exports = Rayon;
