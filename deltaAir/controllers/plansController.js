const Plans = require("../models/plansModel");
const { getData } = require("../utils/utils");

// @desc Get all users
// @route GET /api/users
const getPlans = async (req, res) => {
  try {
    const plans = await Plans.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(plans));
  } catch (error) {
    console.log(error);
  }
};

// @desc Get single user
// @route GET /api/users/id
const getPlan = async (req, res, id) => {
  try {
    const plan = await Plans.findById(id);

    if (plan) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(plan));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "plan not Found" }));
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc ADD user
// @route POST /api/user
const addPlan = async (req, res) => {
  try {
    const body = await getData(req);

    const { flightCode, seats ,stopover, from , where , departure_date ,arrival_date , departure_time ,arrival_time }  = JSON.parse(body);
    const plan = {
      flightCode,
      seats,
      stopover,
      from,
      where,
      departure_date,
      arrival_date,
      departure_time,
      arrival_time,
    };
    const newPlan = await Plans.createPlan(plan);

    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newPlan));
  } catch (error) {
    console.log(error);
  }
};
// @desc Update user
// @route update /api/user
const updatePlan = async (req, res, id) => {
  try {
    const target = await Plans.findById(id);

    if (target) {
      const body = await getData(req);

      const { flightCode, seats ,stopover, from , where , departure_date ,arrival_date , departure_time ,arrival_time } = JSON.parse(body);
      const plan = {
        flightCode: flightCode || target.flightCode,
        seats: seats || target.seats,
        stopover: stopover || target.stopover,
        from: from || target.from,
        where: where || target.where,
        departure_date: departure_date || target.departure_date,
        arrival_date: arrival_date || target.arrival_date,
        departure_time: departure_time || target.departure_time,
        arrival_time: arrival_time || target.arrival_time,
      };
      const updPlan = await Plans.updPlan(plan, id);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updPlan));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "plan not exist to be updated!" }));
    }
  } catch (error) {
    console.log(error);
  }
};
// @desc delete user
// @route DELETE /api/users/id
const deletePlan = async (req, res, id) => {
  try {
    const plan = await Plans.findById(id);

    if (plan) {
      await Plans.removePlan(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: `plan has been deleted` }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "plan not Found" }));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPlans,
  getPlan,
  addPlan,
  updatePlan,
  deletePlan,
};
