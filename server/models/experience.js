const mongoose=require("mongoose");

const Experience=new mongoose.Schema({
    //Experience
    Email:{type:String,require: [true, "Please enter Email"]},
    jobType:{type:String,require: [true, "Please enter JobType"]},
    workedAt:{type:String,require: [true, "Please enter company/institute"]},
    jobcity:{type:String,require: [true, "Please enter JobCity"]},
    StartDate:{type:Date,require: [true, "Please enter StartDate"]},
    EndDate:{type:Date,require: [true, "Please enter EndDate"]},
    
})

const Resume=mongoose.model("Experience",Experience);

module.exports=Resume; 