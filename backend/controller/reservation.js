import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill all the fields", 400));
    }
    try{
        await Reservation.create({firstName, lastName, email, phone, date, time}    );
        res.status(200).json({
            success:true,
            message:"Reservation sent successfully"
        });
    }catch(err){
        if(err.name==="ValidationError"){
            const message = Object.values(err.errors).map(value=>value.message);
            return next(new ErrorHandler(message.join(', '), 400));
        }
        return next(err);
    }
};