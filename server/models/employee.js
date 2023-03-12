const mongoose=require("mongoose");
const bcrpty = require("bcryptjs");
const jwt = require("jsonwebtoken");
const employeeSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    companyname:{type:String,require:[true,"Please enter companyname"]},
    email:{type:String,require: [true, "Please enter email"]},
    password:{type:String,require: [true, "Please enter password"]},
  
})

employeeSchema.pre("save", async function (next) {
    console.log("enter schema");
  
    if (this.isModified("password")) {
      console.log("save password function in");
      const salt = await bcrpty.genSalt(10);
      const hash = await bcrpty.hash(this.password, salt);
      this.password = hash;
    }
    next();
  });
  

const employeeUser=mongoose.model("employee",employeeSchema);

module.exports=employeeUser; 