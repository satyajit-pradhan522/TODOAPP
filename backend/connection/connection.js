const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://satyajitpradhan:phonepay2003@cluster0.7lfbhlt.mongodb.net/todo-list"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Not Connected", error);
  }
};

connectDB();
