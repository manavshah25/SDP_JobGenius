const mongoose=require("mongoose");

const Education=new mongoose.Schema({
//Education
Email:{type:String,require: [true, "Please enter Email"]},
SchoolName:{type:String,require: [true, "Please enter SchoolName"]},
CollageName:{type:String,require: [true, "Please enter CollageName"]},
Qualification:{type:String,require: [true, "Please enter Qualification"]},
YearOfGraduation:{type:Date,require: [true, "Please enter YearOfGraduation"]},
})

const Resume=mongoose.model("education",Education);

module.exports=Resume; 