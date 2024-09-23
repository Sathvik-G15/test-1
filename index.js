
const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRouter");
const bodyParser = require("body-parser");
const cors = require("cors")

const app=express();
mongoose.connect("mongodb+srv://projectDB:sathvikG2005@cluster.n7xbh.mongodb.net/schooldb");  //give database link here
var db = mongoose.connection;
db.on("open",()=>console.log("Connected Succesfully"));
db.on("error",()=>console.log("Error!! Connection failed"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.listen(4000,()=>{
    console.log("server started at 4000");
})
app.use("/studentRoute",studentRoute);