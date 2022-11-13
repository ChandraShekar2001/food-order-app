const Food = require("../model/foodModel");

exports.createFoodItem = (req, res) => {
  const { itemName, price, quantity } = req.body;

  const newFoodItem = new Food({
    itemName,
    price,
    quantity,
  });

  newFoodItem
    .save()
    .then(() =>
      res.send({
        message: "success",
        data: newFoodItem,
      })
    )
    .catch((err) =>
      res.send({
        message: "fail",
      })
    );
};

exports.getAllFoodItems = (req, res) => {
  Food.find()
    .then((data) =>
      res.send({
        message: "success",
        foods:data,
      })
    )
    .catch((err) => res.send({ message: "fail", error: err }));
};

exports.getSingleFoodItem = (req, res) => {
  const id = req.params.id
  console.log('hi');
  Food.find({_id:id})
    .then((data) =>
      res.send({
        message: "success",
        food:data,
      })
    )
    .catch((err) => res.send({ message: "fail", error: err }));


};
