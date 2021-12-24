const con = require("../../config/db");

class Product {
  static async findAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM products`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  static async getProductById(id) {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM products WHERE id=${id}`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
}
module.exports = Product;
