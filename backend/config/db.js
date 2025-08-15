const mongoose = require("mongoose");

// Safe connector for serverless: do not exit process on failure; reuse existing connection
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
    return mongoose.connection;
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    // Throw to let callers decide how to handle; do not exit in serverless
    throw err;
  }
};

module.exports = connectDB;
