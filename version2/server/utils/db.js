import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// const URI = "mongodb://localhost:27017/mern_admin";


const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    // if (!URI) {
    //     console.error("MONGODB_URI environment variable is not set");
    //     process.exit(1);
    // }
    try {
        await mongoose.connect(URI);
        console.log("Database connected");
    }
    catch(error) {
        console.error("Database connection failed");
        process.exit(1);
    }
};

export default connectDB;
