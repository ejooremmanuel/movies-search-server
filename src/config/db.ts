import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        autoIndex: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }
  } catch (error) {
    console.log(`MongoDB Connected: ${error}`);
  }
};
