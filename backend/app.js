const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

//route imports
const orderRoutes = require('./routes/orderRoutes')
const foodRoutes = require('./routes/foodRoutes')


//api
app.use('/api', orderRoutes)
app.use('/api', foodRoutes)



module.exports = app;

