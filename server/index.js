import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'

import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res)=>{
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes);
const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://ghoshsnehasis19:admin123@cluster0.rkjpguo.mongodb.net/"
mongoose.connect( CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)})