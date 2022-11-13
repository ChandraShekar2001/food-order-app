const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoURI =
    "mongodb://localhost:27017/FSD_Assignment";
  mongoose
    .connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
