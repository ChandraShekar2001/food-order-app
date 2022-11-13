const express = require("express");

const router = express.Router();

const {
  createFoodItem,
  getAllFoodItems,
  getSingleFoodItem,
} = require("../controllers/foodController");

router.route("/food/new").post(createFoodItem);
router.route("/food/all").get(getAllFoodItems);
router.route("/food/:id").get(getSingleFoodItem);

module.exports = router;
