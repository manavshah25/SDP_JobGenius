const mongoose=require("mongoose");

const Personaldetail=new mongoose.Schema({
    //personaldetails
    Firstname:{type:String,require: [true, "Please enter Firstname"]},
    Lastname:{type:String,require: [true, "Please enter Lastname"]},
    Email:{type:String,require: [true, "Please enter Email"]},
    City:{type:String,require: [true, "Please enter City"]},
    Country:{type:String,require: [true, "Please enter country"]},
    Pincode:{type:String,require: [true, "Please enter Pincode}"]},
    Mobile:{type:String,require: [true, "Please enter Mobile no."]},

})

const Resume=mongoose.model("PersonalDetails",Personaldetail);

module.exports=Resume; 