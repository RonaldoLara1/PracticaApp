import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/jugadoresControllers.js";

dotenv.config();
mongoose.connect(process.env.url)
.then(()=>{
    console.log("jala esta madre")
})
.catch((error)=>{
    console.log("no funciona esta madre ", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha correcto")
})

test()