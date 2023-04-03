const mongoose=require("mongoose");
const Jobpost =new mongoose.Schema({
 title:{type:String,require: [true, "Please enter title"]},
 companyname:{type:String,require: [true, "Please enter company name"]},
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
 deadlineDate:{type:String,require:[true,"please enter the date"]},
 Applieduser:[
    {
       userId:{
        type:String,
        required:true,
       }   
    },
 ],

})

Jobpost.methods.companyjob=async function (userid) {
  try{
    this.Applieduser= this.Applieduser.concat({
        userId:userid,
    })
   await this.save()
  }catch(e){console.log(e)}
    
  };
const jobpost =mongoose.model("Job",Jobpost);

module.exports= jobpost; 