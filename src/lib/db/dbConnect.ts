import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const dbConnect = async () => {

    try {
        
        if (connection.isConnected) {
            console.log("Database already connected");
            return;
        }
    
        const db = await mongoose.connect(process.env.MONGO_URI!);
    
        connection.isConnected = db.connections[0].readyState;

    } catch (error: any) {
        console.error("Error occured while connecting to DB:", error);
        throw new Error(error);
    }
}

export default dbConnect;