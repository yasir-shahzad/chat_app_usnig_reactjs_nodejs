import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongo connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
