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
const frontendURL = 'https://restaurant-website-alpha-three.vercel.app/';

app.use(cors({
    origin:frontendURL,
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
const PORT=process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});
