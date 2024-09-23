
const express = require("express");
const mongoose = require("mongoose");
const studentRoute = express.Router();
const Student = require("../model/studentSchema");

studentRoute.get("/",(req,res)=>{    //get request to read the data
    Student.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        return err;
    })
})
studentRoute.post("/create-student",(req,res)=>{             //post request
    Student.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        return err;
    })
})
studentRoute.delete("/delete-student/:_id",(req,res)=>{       //delete request
    Student.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        return err;
    })
})
studentRoute.route("/update-student/:id")        //both get and put in same location
.get((req,res)=>{
    Student.findById(req.params.id)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        return err;
    })
})
.put((req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        return err;
    })
})
module.exports = studentRoute;