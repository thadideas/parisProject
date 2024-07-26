import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import { eventRoutes } from './routes/eventRoutes.js';
import { authRoutes } from './routes/authRoutes.js';
import { gameRoutes } from "./routes/gameRoutes.js";

import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const uri = process.env.DB_URI;
const port = process.env.PORT || 4000

app.use(express.json())

app.use('/api/events', eventRoutes)
app.use('/api/auth', authRoutes )
app.use('/api/game', gameRoutes)

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req, res) =>res.sendFile(path.join(__dirname,'/client/dist/index.html')))

mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to DB yo");
        app.listen(4000,'localhost',()=>console.log("Listening on port 4000"))
    })
    .catch((err)=>console.log(err));



