const Rayon = require('../Models/rayon')


const getAllRayons = async (req, res) => {
    try {
        const Rayons = await Rayon.findAll();
        res.json(Rayons);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    getAllRayons,
}