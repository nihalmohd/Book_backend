const mongoose = require("mongoose");

const Database = () => {
  mongoose.connect(process.env.MONGOURL, {
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });
};

module.exports = { Database };