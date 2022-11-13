const mongoose = require('mongoose');

const orderModel = mongoose.Schema({
    items: [
        {
            itemName: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "food",
                required: true,
            }
        }
    ]
})


module.exports = mongoose.model('order', orderModel);