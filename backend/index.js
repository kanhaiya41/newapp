import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDB from './utills/db.js';
import userRoute from './routes/user.route.js'
import postRoute from "./routes/post.route.js"
import messageRoute from "./routes/message.route.js"
import { app,server,io } from './sochet/socket.js';
import path from 'path'; 

dotenv.config({});

const PORT=process.env.PORT||3000;

const __dirname=path.resolve();  //**

// app.get("/",(req,res)=>{
//     return res.status(200).json({
//         message:"i am comming from backend",
//         success:true
//     })
// })

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));

//yha pr apni api ayengi
app.use("/api/v1/user",userRoute);
app.use("/api/v1/post",postRoute);
app.use("/api/v1/message",messageRoute);

app.use(express.static(path.join(__dirname,'/frontend/build')))         //****** i use build instead of dist*/
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
})

server.listen(PORT,()=>{
    connectDB();
    console.log(`Server listnet at port ${PORT}`)
})