import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const URL = process.env.DB_URL || "mongodb://localhost:27017/users-db";
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Connected to the database`);
  } catch (error) {
    console.error(`Error in connecting to the database: ${error.message}`);
    process.exit(1);
  }
};

export { connectDatabase };
