import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
let app = express()
dotenv.config()
import postData from "./controllers/postData.js"



mongoose.connect(process.env.MONGO_STRING,{})
.then(() => {console.log("connection to mongodb successful")})
.catch(() => {console.log("An error occured, couldn't connect to mongodb")})    



// importing mongo schma...
import healthModel from "./models/hackathon.model.js"
import getData from "./controllers/getData.js"


// using json formatted data
app.use(express.json());
app.use(cors({}))

app.post("/postVitals", postData)
app.get("/getVitals",getData)

app.get("/", (req,res) => {
    res.send("cool")
})

app.listen(3000,() => {
    console.log(`server running on port 3000`)
})