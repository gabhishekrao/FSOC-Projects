import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoute from './routes/auth.js';
import authHotels from './routes/hotels.js';
import authRooms from './routes/rooms.js';
import authUsers from './routes/users.js';
import cookieParser from "cookie-parser";


const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongoose.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected.");
});

mongoose.connection.on("connected", () => {
    console.log("Connected.");
});

app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRoute);
app.use('/api/hotels', authHotels);
app.use('/api/rooms', authRooms);
app.use('/api/users', authUsers);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(8800, () => {
    connect()
    console.log("We are connected to our Backend!");
})