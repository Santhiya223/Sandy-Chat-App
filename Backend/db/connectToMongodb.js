import mongoose from "mongoose";

const connectToMongodb = async() => {
    try{
        // await mongoose.connect(process.env.MONGO_DB_URI);
        await mongoose.connect(process.env.MONGO_DB_URI || 'mongodb://localhost:27017/chat_app-db');
        console.log("CONNECTED TO MONGODB");
    } catch (e) {
        console.log("error in connecting mongo db",e.message);
    }
}

export default connectToMongodb;