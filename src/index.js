// require('dotenv').config()
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.config || 7000 ,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!!!!!! ",err)
})


















/*
import express from "express";
const app= express()

(
    async () => {
        try{
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error",(error) => {
                console.log("Err :" , error);
                throw error;
            })
            app.listen(process.env.PORT,()=>{
                console.log(`Listening on port ${process.env.PORT}`);
            })
        }
        catch(error){

        }
    }
)()
*/