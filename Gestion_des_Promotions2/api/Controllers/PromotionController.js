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

    const rayons = await Rayon.findAll();

    if (parseInt(req.body.promotion) <= 50) {

      if (req.body.rayon.localeCompare("multimedia") == 0 && parseInt(req.body.promotion) <= 20) {
        req.body.loyalty_points = (req.body.promotion / 5) * 50;
        await Promotion.create(req.body);
        return res.status(201).send({
          message: `promotion created for multimedia rayon`,
        });
      } else if (req.body.rayon.localeCompare("multimedia") !== 0) {
        req.body.loyalty_points = (req.body.promotion / 5) * 50;
        await Promotion.create(req.body);
        return res.status(201).send({
          message: `promotion created `,
        });
        // console.log(req.body.rayon.localeCompare("multimedia") == 0);
      } else {
        return res.status(404).send({ message: 'you cannot create' })
      }

    } else {
      return res.json({
        message: "Promotion Greater than 50%",
      });
    }

  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatePromotion = async (req, res) => {
  try {
    // const Promotions = await Promotion.findAll();
    // const promo = Promotions.find((p) => p.id == req.params.id);

    await Promotion.update(req.body, req.params.id);

    // write the action to txt file
    fs.appendFileSync(
      "log.txt",
      `adminCenter ${id_admin_center} has been approve promotion of ${promotion}% on rayon ${rayon} product ${product} \n`,
      "UTF-8",
      { flags: "a+" }
    );

    res.json({ message: updated });

  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promo = Promotions.find((p) => p.id == req.params.id);

    const {
      promotion,
      id_admin_center,
      product,
      rayon,
      expiration,
      date_promotion,
      status,
    } = promo;

    if (promo) {
      let date = new Date();
      let hours = date.getHours();

      if (hours <= 8 || hours > 12) {
        // promo.status = "Not Processed";
        // await Promotion.update(promo, req.params.id);
        res.json({ message: "you cannot update status" });
      } else {
        promo.status = "Processed";
        await Promotion.update(promo, req.params.id);

        // write the action to txt file
        fs.appendFileSync(
          "log.txt",
          `adminCenter ${id_admin_center} has been approve promotion of ${promotion}% on rayon ${rayon} product ${product} \n`,
          "UTF-8",
          { flags: "a+" }
        );

        res.json({ message: "status updated" });
      }
    } else {

      res.json({
        message: "promotion not found",
      });
    }
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
