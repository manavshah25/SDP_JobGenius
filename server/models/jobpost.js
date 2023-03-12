const mongoose=require("mongoose");
const Jobpost =new mongoose.Schema({
 title:{type:String,require: [true, "Please enter title"]},
 category:{type:String,require: [true, "Please enter jobcategory"]},
 jobtype:{type:String,require: [true, "Please enter job type"]},
 salary:{type:Number,require: [true, "Please enter salary"]},
 exprience:{type:String,require: [true, "Please enter exprience"]},
 jobfunction :[
    {
        JavaDev:{
            type:String
        },
        PythonDev:{
            type:String
        },
        FullStackDev:{
            type:String
        },
        UIUXDesginer:{
            type:String
        },
        AndroidDev:{
            type:String
        },
    },
 ],
 jobsummary:{type:String,require: [true, "Please enter jobsummary"]},
 jobrequirement:{type:String,require: [true, "Please enter jobrequirement"]},
 postedDate:{type:String,require:[true,"please enter the date"]},
})
const jobpost =mongoose.model("Job",Jobpost);

module.exports= jobpost; 