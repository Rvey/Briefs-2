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
    // let ehe = JSON.stringify(user)
    // let yep = JSON.parse(ehe)
    // const name = user.name
    // const bookedPlaces = user.bookedPlaces
    // const selectedPlan = user.selectedPlan
    // let add = `INSERT INTO users SET ?` , {name : user.name}
    con.query('INSERT INTO users SET ?' , {name : user.name , bookedPlaces: user.bookedPlaces , selectedPlan: user.selectedPlan}, (err, result) => {
      if (err) throw err;
      console.log(JSON.stringify(result) + "userADDED !");
    });
   
    // console.log( bookedPlaces , 'asdasd');
    resolve(user);
  });
};

module.exports = {
  findAll,
  findById,
  createUser,
};
