const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({
    Name:{type:String,require: [true, "Please enter name"]},
    CompanyLocation:{type:String,require:[true,"Please enter Location"]},
    Employee_Requirement:[
        {
            qualification:{type:String,require:[true,"Please enter qualification"]},
        }
    ],
    Experience:{type:String,require:[true,"Please enter your experience"]},
    Vacancies:{type:Number,require:[true,"Please enter Vacancies you required"]},
})

const companyUser=mongoose.model("company",companySchema);

module.exports=companyUser; 