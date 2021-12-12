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
    con.query(
      "INSERT INTO users SET ?",
      {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        phone: user.phone,
        seats: user.seats,
        planID: user.planID,
      }
      //   (err, result) => {
      //     if (err) throw err;
      //     console.log(JSON.stringify({ message: "user has been added" }));
      //   }
    );

    resolve(user);
  });
};
const updUser = (user, id) => {
  return new Promise((resolve, reject) => {
    con.query(
      `UPDATE users SET ? WHERE id =${id}`,
      {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        phone: user.phone,
        seats: user.seats,
        planID: user.planID,
      }
      //   (err, result) => {
      //     if (err) throw err;
      //     console.log(JSON.stringify({ message: "user updated !" }));
      //   }
    );

    resolve(user);
  });
};
const removeUser = (id) => {
  con.query(`DELETE FROM users WHERE id =${id}`, (err, result) => {
    // if (err) throw err;
    // console.log(JSON.stringify({ message: "userRemoved" }));
  });
};

module.exports = {
  findAll,
  findById,
  createUser,
  updUser,
  removeUser,
};
