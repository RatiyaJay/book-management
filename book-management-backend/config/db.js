const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://usama:usama12345@smart-e-commercecluster.feua9.mongodb.net/smart-e-commerce?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
