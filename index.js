require("dotenv").config()
const express = require("express"); // <-- comon js
//import express from "express" <-- es 6 import
const cors = require("cors");
const animals = require("./routes/animals.routes")

const app = express();

//import db-connection
require("./database")

//serve docs
app.use("/", express.static("docs"))

//accept request from anywhere
app.use(cors());

//expect incomming data to be json 
app.use(express.json());

//routes 
app.use("/api/v1", animals);




app.listen(4000, () => {
    console.log("Listen for request on port 4000")
});