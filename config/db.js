const mongoose = require("mongoose");

const uri = process.env.MONGO_DB_URI;

const connect = async () => {
  try {
    await mongoose.connect(uri);

    console.log("Connected to DB Successfully.");
  } catch (err) {
    console.log(err);
    console.error(err.message);
  }
};

connect();
module.exports = mongoose;
