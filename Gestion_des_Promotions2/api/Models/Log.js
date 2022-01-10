const con = require("../../config/db");

class Logs {
    static async findAll() {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM logs ORDER BY id DESC;`, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
    }
    static async create(log) {
        con.query("INSERT INTO logs SET ?", {
            RA_id: log.RA_id,
            email: log.email,
            rayon: log.rayon,
            promotion: log.promo,
            product: log.product
        });
    }

}
module.exports = Logs