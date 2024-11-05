import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';
import connectToMongodb from './db/connectToMongodb.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import {app, server} from './socket/socket.js';
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //parsing the incoming request with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res) => {
//     res.send("Hello world35");
// });

server.listen(PORT,()=> {
    connectToMongodb();
    console.log(`Localhost running in port no : ${PORT}`)
});