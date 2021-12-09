const con = require("../config/db.config");
const findAll = () => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM plans`, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};
const findById = (id) => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM plans`, (err, result) => {
      if (err) throw err;
      let data = JSON.stringify(result);
      let parsedData = JSON.parse(data);
      const plan = parsedData.find((p) => p.id == id);
      resolve(plan);
    });
  });
};
const createPlan = (plan) => {
  return new Promise((resolve, reject) => {
    con.query(
      "INSERT INTO plans SET ?",
      {
        planName: plan.planName,
        availablePlaces: plan.availablePlaces,
      }
      //   (err, result) => {
      //     if (err) throw err;
      //     console.log(JSON.stringify({ message: "user has been added" }));
      //   }
    );

    resolve(plan);
  });
};
const updPlan = (plan, id) => {
  return new Promise((resolve, reject) => {
    con.query(
      `UPDATE plans SET ? WHERE id =${id}`,
      {
        planName: plan.planName,
        availablePlaces: plan.availablePlaces,
      }
    );

    resolve(plan);
  });
};
const removePlan = (id) => {
  con.query(`DELETE FROM plans WHERE id =${id}`, (err, result) => {
    // if (err) throw err;
    // console.log(JSON.stringify({ message: "userRemoved" }));
  });
};

module.exports = {
  findAll,
  findById,
  createPlan,
  updPlan,
  removePlan,
};
