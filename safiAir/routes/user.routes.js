const con = require("../config/db.config");
// let username = con.escape("redone");
// let planeName = con.escape("alpha");


// get all users
let getAll = `SELECT * FROM users`;
con.query(getAll, (err, result, fields) => {
  if (err) throw err;
  console.log(result);
});

// get all plans

const getPlans = () => {
  let getAllPlans = `SELECT * FROM plans`;
  con.query(getAllPlans, (err, result) => {
    if (err) throw err;
    let res = JSON.stringify(result);
    let parsedData = JSON.parse(res);
    allPlans.push(parsedData);
    // console.log(allPlans);
  });
};

// update plan available places
const updatePlaces = (planeName, placesCount) => {
  let update = `UPDATE plans SET availablePlaces=${placesCount} WHERE planName=${planeName}`;
  con.query(update, planeName, (err, result) => {
    if (err) throw err;
    console.log(JSON.stringify(result) + "  " + "RECORD UPDATED");
  });
};

// get plan single record
// let getPLan = ` SELECT * FROM plans WHERE planName=${planeName}`;
// con.query(getPLan, (err, result) => {
//   if (err) throw err;
//   let re = JSON.stringify(result);
//   console.log(JSON.parse(re));
// });

getPlans()
