import express from 'express'
import userRouter from './routes/taskRoutes.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express();

//Third party middleware
app.use(morgan("dev"));
dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() =>{
    console.log("MONGO-DB Connected Sucessfully");
}).catch((err) => console.log(err));
//custom middleware 
// app.use((req,res,next) => {
//     console.log("User Logged In  ..");
//     next();
// })

// app.use((req,res,next) => {
//     let date = new Date();
//     console.log(date.toLocaleTimeString()) ;
//     next();
// })

//middleware to parse JSON request bodies
app.use(express.json());

app.use("/",userRouter);


app.listen(process.env.PORT , ()=> {
    console.log("Server is Running ....!!!");
})

