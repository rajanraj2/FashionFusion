import mongoose from "mongoose";



const db = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            // useUnifiedToplogy: true,
        });
        console.log("Database connected successfully");
    }
    catch (err) {
        console.log(`error connecting to db server
        error: ${ err }`);
    }
}

export default db;
