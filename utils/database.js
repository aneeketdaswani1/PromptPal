import mongoose from "mongoose";

let isConnected = false;

export const ConnectTODB =  async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Already connected to DB");
        return;
    }
    try{
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "share-prompt",
        })

        isConnected = true;
        console.log("Connected to DB suscessfully");
    }
    catch(err){
        console.log("Error connecting to DB");
        console.log(err);
    }
}
