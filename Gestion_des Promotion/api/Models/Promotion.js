const con = require("../../config/db");

class Promotion {
  static async findAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM promotions`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  static async create(promotion) {
    con.query("INSERT INTO promotions SET ?", {
      promotion: promotion.promotion,
      id_admin_center: promotion.id_admin_center,
      id_rayon: promotion.id_rayon,
      id_product: promotion.id_product,
      loyalty_points: promotion.loyalty_points,
      date_promotion: promotion.date_promotion,
      status: promotion.status,
    });
  }

  static async update(promotion, id) {
    con.query(`UPDATE promotions SET ? WHERE id =${id}`, {
      promotion: promotion.promotion,
      id_admin_center: promotion.id_admin_center,
      id_rayon: promotion.id_rayon,
      loyalty_points: promotion.loyalty_points,
      id_product: promotion.id_product,
      date_promotion: promotion.date_promotion,
      status: promotion.status,
    });
  }

  static async destroy(id) {
    con.query(`DELETE FROM promotions WHERE id =${id}`, (err, result) => {
      if (err) throw err;
    });
  }
}
module.exports = Promotion;
