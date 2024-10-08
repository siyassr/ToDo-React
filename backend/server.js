const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const router = require("./routes/route")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(cors())
mongoose.connect(process.env.CONECTION_STRING).then(()=>{console.log("DB connected")})
console.log(process.env.CONECTION_STRING)
app.use(router)
app.listen(3000,()=>{console.log("server is running")})