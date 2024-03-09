import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected with ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Handle error appropriately, e.g., throw an error, exit the application, etc.
    // throw error; // Uncomment this line if you want to propagate the error further.
  }
};
