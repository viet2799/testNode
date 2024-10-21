const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, options);
  } catch (error) {
    console.log("Connect to database failed");
  }
};

module.exports = {
  connection,
};
