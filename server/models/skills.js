const mongoose=require("mongoose");

const Skill=new mongoose.Schema({
//Skills
Email:{type:String,require: [true, "Please enter Email"]},
Skills:[{
    skill1:{type:String,require: [true, "Please enter skill1"]},
    skill2:{type:String,require: [true, "Please enter skill2"]},
    skill3:{type:String,require: [true, "Please enter skill3"]},
    skill4:{type:String,require: [true, "Please enter skill4"]},
    skill5:{type:String,require: [true, "Please enter skill5"]}

}]
})

const Resume=mongoose.model("Skills",Skill);

module.exports=Resume; 