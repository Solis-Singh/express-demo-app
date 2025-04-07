import express from 'express'
import userRouter from './routes/taskRoutes.js'
import morgan from 'morgan'
import dotenv from 'dotenv'

const app = express();

//Third party middleware
app.use(morgan("dev"));
dotenv.config();

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

