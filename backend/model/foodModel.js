const mongoose = require('mongoose')

const foodModel = mongoose.Schema({
    itemName: String, 
    quantity: Number, 
    price: Number,
})


module.exports = mongoose.model('Food', foodModel)