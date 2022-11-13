const Order = require("../model/orderModel");

exports.createOrder = (req, res) => {
  // console.log(req.body);
  const items = req.body;
  const newOrder = new Order({
    items,
  });

  newOrder
    .save()
    .then(() =>
      res.send({
        message: "success",
        newOrder,
      })
    )
    .catch((err) => res.send({ message: "fail", error: err }));
};

exports.getAllOrders = (req, res) => {
  Order.find()
    .then((data) => res.send({ message: "success", orders:data }))
    .catch((err) => res.send({ message: "fail", error: err }));
};

exports.getSingleOrder = (req, res) => {
    const id = req.params.id;
    Order.find({_id:id})
    .then((data) => res.send({ message: "success", data }))
    .catch((err) => res.send({ message: "fail", error: err }));
};
