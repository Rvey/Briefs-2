const Promotion = require("../Models/Promotion");
const fs = require("fs");
const Product = require("../Models/Product");
const Rayon = require("../Models/rayon");

const getAllPromotions = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    res.json(Promotions);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getPromotionById = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promotion = Promotions.find((p) => p.id == req.params.id);
    if (!promotion) {
      res.json({ message: "Promotion Not Found" });
    }
    res.json(promotion);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createPromotion = async (req, res) => {
  try {
    // const product = await Product.getProductById(req.body.id_product);

    const rayon = await Rayon.getRayonById(req.body.id_rayon);

    if (parseInt(req.body.promotion) <= 50) {
      if (rayon[0].nom == "multimedia" && req.body.promotion <= 20) {
        req.body.loyalty_points = (req.body.promotion / 5) * 50;
        await Promotion.create(req.body);
        res.json({
          message: `promotion created for multimedia rayon`,
        });
      } else if (
        rayon[0].nom == "electronic" ||
        rayon[0].nom == "alimentation"
      ) {
        req.body.loyalty_points = (req.body.promotion / 5) * 50;
        await Promotion.create(req.body);
        res.json({
          message: `promotion created `,
        });
      }
      res.json({
        message: "promotion not created",
      });
    }

    res.json({
      message: "Promotion Not Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatePromotion = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promo = Promotions.find((p) => p.id == req.params.id);

    const {
      promotion,
      id_admin_center,
      id_product,
      id_rayon,
      date_promotion,
      status,
    } = promo;

    if (promo) {
      let date = new Date();
      let hours = date.getHours();

      if (hours <= 8 || hours > 16) {
        // promo.status = "Not Processed";
        // await Promotion.update(promo, req.params.id);
        res.json({ message: "you cannot update status" });
      } else {
        promo.status = "Processed";
        await Promotion.update(promo, req.params.id);

        // write the action to txt file
        fs.appendFileSync(
          "log.txt",
          `adminCenter ${id_admin_center}   has been approve promotion of ${promotion} on rayon id ${id_rayon} product id ${id_product} \n`,
          "UTF-8",
          { flags: "a+" }
        );

        res.json({ message: "status updated" });
      }
    }
    res.json({
      message: "promotion not found",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deletePromotion = async (req, res) => {
  try {
    await Promotion.destroy(req.params.id);
    res.json({
      message: "Promotion Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createPromotion,
  getAllPromotions,
  getPromotionById,
  deletePromotion,
  updatePromotion,
};
