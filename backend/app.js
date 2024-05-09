import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
//give the dotenv file address
dotenv.config({path:"./config/config.env"});

//to use the backend with the frontend
//this will be used as a middleware
app.use(cors({
    origin:["https://restaurant-website-16ox.vercel.app"],
    methods:["POST"],
    credentials:true
}));


//now to convert string into json
app.use(express.json());
//for url encoding
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/reservation",reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
