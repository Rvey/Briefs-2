const Product = require('../Models/Product')


const getAllProducts = async (req, res) => {
    try {
        const Products = await Product.findAll();
        res.json(Products);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const Products = await Product.findAll();
        const SProduct = Products.find((p) => p.id == req.params.id);
        if (!SProduct) {
          res.json({ message: "Promotion Not Found" });
        }else {
        await res.json(SProduct);
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById
}