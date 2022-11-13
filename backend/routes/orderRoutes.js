const express = require('express')

const router = express.Router()

const { getAllOrders, createOrder, getSingleOrder } = require('../controllers/orderController')

router.route('/orders/all').get(getAllOrders);
router.route('/order/new').post(createOrder);
router.route('/order/:id').get(getSingleOrder);


module.exports = router