const mongoose=require("mongoose");

const ResumeUserSchema=new mongoose.Schema({
    //personaldetails
    Firstname:{type:String,require: [true, "Please enter Firstname"]},
    Lastname:{type:String,require: [true, "Please enter Lastname"]},
    City:{type:String,require: [true, "Please enter City"]},
    Country:{type:String,require: [true, "Please enter country"]},
    Pincode:{type:Number,require: [true, "Please enter Pincode}"]},
    Mobile:{type:Number,require: [true, "Please enter mobile no."]},
    //Experience
    jobtitle:{type:String,require: [true, "Please enter Jobtitle"]},
    workedAt:{type:String,require: [true, "Please enter company/institute"]},
    jobcity:{type:String,require: [true, "Please enter JobCity"]},
    StartDate:{type:Date,require: [true, "Please enter StartDate"]},
    EndDate:{type:Date,require: [true, "Please enter EndDate"]},
    //Education
    SchoolName:{type:String,require: [true, "Please enter SchoolName"]},
    Qualification:{type:String,require: [true, "Please enter Qualification"]},
    YearOfGraduation:{type:Date,require: [true, "Please enter YearOfGraduation"]},
    //Skills
    skills:[
        {
            Skill:{
                type: String,
                required:[true,"Please enter your skills"],
            } 
        }
    ]

})

const Resume=mongoose.model("resumeUser",ResumeUserSchema);

module.exports=Resume; 