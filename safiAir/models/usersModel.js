// const users = require("../data/users.json");
const con = require("../config/db.config");
const findAll = () => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM users`, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};
const findById = (id) => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM users`, (err, result) => {
      if (err) throw err;
      let data = JSON.stringify(result);
      let parsedData = JSON.parse(data);
      const user = parsedData.find((u) => u.id == id);
      resolve(user);
    });
  });
};
const createUser = (user) => {
  return new Promise((resolve, reject) => {
    let add = `INSERT INTO plans (planName) VALUES (${JSON.stringify(user.name)});`;
    con.query(add, (err, result) => {
      if (err) throw err;
      console.log(JSON.stringify(result) + "  " + "userADDED !");
    });
    resolve(user.name);
    console.log(user.name);
  });
};

module.exports = {
  findAll,
  findById,
  createUser,
};
