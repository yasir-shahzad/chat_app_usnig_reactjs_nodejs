import express from "express"
import dotenv from "dotenv";
dotenv.config()
const app = express();
import  authRoutes from '../routes/auth.route.js';
import { connectDB } from "../lib/db.js";
app.use(express.json());
app.use('/api/auth' , authRoutes);

const port = process.env.port
app.listen(port , ()=>{
    console.log('the application is runnig on the port ' + port)
    connectDB();
})