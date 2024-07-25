import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import { eventRoutes } from './routes/eventRoutes.js';
import { authRoutes } from './routes/authRoutes.js';

const app = express();
const uri = process.env.DB_URI;
const port = process.env.PORT || 4000

app.use(express.json())

app.use('/api/events', eventRoutes)
app.use('/api/auth', authRoutes )

mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to DB yo");
        app.listen(4000,'localhost',()=>console.log("Listening on port 4000"))
    })
    .catch((err)=>console.log(err));



