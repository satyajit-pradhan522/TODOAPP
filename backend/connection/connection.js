const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://satyajitpradhan:phonepay2003@cluster0.7lfbhlt.mongodb.net/"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    res.starus(500).send({ message: "MongoDB connection failed", error });
  }
};

connectDB();

module.exports = connectDB;
