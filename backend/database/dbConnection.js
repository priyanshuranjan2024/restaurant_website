import mongoose from "mongoose";
//if connection is successful then then otherwise catch

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"RESTAURANT",
    })
    .then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log(err);
    });

};