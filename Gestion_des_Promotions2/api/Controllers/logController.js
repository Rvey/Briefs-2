const Logs = require('../Models/Log')

const getAllLog = async (req, res) => {
  try {
    const log = await Logs.findAll();
    res.json(log);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createLog = async (req, res) => {
  try {
    await Logs.create(req.body);
    return res.status(201).send({
      message: `log registered`,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = { getAllLog , createLog }
