const Promotion = require("../Models/Promotion");
const Product = require("../Models/Product");
const Rayon = require("../Models/rayon");
const Logs = require("../Models/Log");
const RayonAdmin = require("../Models/AdminRayon");

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

    if (parseInt(req.body.promotion) <= 50) {

      if (req.body.rayon.localeCompare("multimedia") == 0 && parseInt(req.body.promotion) <= 20) {
        req.body.loyalty_points = (req.body.promotion / 5) * (req.body.productPrice * req.body.promotion) / 100;
        
        await Promotion.create(req.body);
        return res.status(201).send({
          message: `promotion created for multimedia rayon`,
        });
      } else if (req.body.rayon.localeCompare("multimedia") !== 0) {
        req.body.loyalty_points = (req.body.promotion / 5) * (req.body.productPrice * req.body.promotion) / 100;
        await Promotion.create(req.body);
        return res.status(201).send({
          message: `promotion created `,
        });
        // console.log(req.body.rayon.localeCompare("multimedia") == 0);
      } else {
        return res.status(404).send({ message: 'cannot set promotion greater than 20% for multimedia' })
      }

    } else {
      return res.status(404).send({
        message: "Promotion Greater than 50%",
      });
    }


  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatePromotion = async (req, res) => {
  try {

    const promos = await Promotion.findAll()
    const promo = promos.find((pr) => pr.id == req.params.id)

    if (promo) {
      promo.promotion = req.body.promotion
      promo.product = req.body.product
      promo.rayon = req.body.rayon
      promo.expiration = req.body.expiration
    }

    await Promotion.update(promo, req.params.id);

    // write the action to txt file

    res.json({ message: 'updated' });

  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateStatusOnLogin = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promo = Promotions.find((p) => p.id == req.params.id);
    if (promo) {
      let date = new Date();
      let hours = date.getHours();

      if (hours >= 8 || hours < 12) {
        if (promo.status !== 'Approved') {
          promo.status = "Not Processed";
          await Promotion.update(promo, req.params.id);  
        }
        res.json({ message: "status updated" });
      } else {

        res.status(404).send({ message: "cannot status updated" });
      }
    } else {

      res.status(404).send({
        message: "promotion not found",
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
const updateStatus = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promo = Promotions.find((p) => p.id == req.params.id);
    const chefRayon = await RayonAdmin.getAll()


    if (promo) {
      let date = new Date();
      let hours = date.getHours();

      if (hours >= 8 || hours < 12) {
        // promo.status = "Processed";
        // await Promotion.update(promo, req.params.id);

        promo.status = req.body.status;
        await Promotion.update(promo, req.params.id);

        const chef = chefRayon.find((p) => p.id == req.body.RA_id);
        chef.approvedPromo = parseInt(chef.approvedPromo) + 1
        await RayonAdmin.update(chef, req.body.RA_id)

        const Alog = {
          RA_id: req.body.RA_id,
          email: req.body.email,
          rayon: req.body.rayon,
          promo: promo.promotion,
          product: promo.product
        }
        await Logs.create(Alog)

        res.status(201).send({ message: "status updated" });

      } else {
        res.json({ message: "cannot status updated out of work time", hour: hours  });
      }
    } else {

      res.status(404).send({
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
  updateStatus,
  updateStatusOnLogin
};
