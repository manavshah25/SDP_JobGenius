const jobmodel=require('../models/jobpost');
const usermodel=require('../models/register');
const bcrypt = require("bcryptjs");
exports.jobpost=async function(req,res)
{
    console.log("hello manav job")
    const {
            title,
            category,
            jobtype,
            salary,
            exprience,
            JavaDev,
            PythonDev,
            FullStackDev,
            UIUXDesginer,
            AndroidDev,
            jobsummary,
            jobrequirement,
            loginuserinfo,
      } = req.body;
     var date = new Date();
        var deadlineDate = new Date(date.setDate(date.getDate() + 10));
       console.log(deadlineDate)
       date=new Date()
     console.log(date); 
      try {
        const obj = new jobmodel({
            title :title,
            companyname:loginuserinfo,
            category:category,
            jobtype:jobtype,
            salary:salary,
            exprience:exprience,
            jobfunction:{
            JavaDev:JavaDev,
            PythonDev:PythonDev,
            FullStackDev:FullStackDev,
            UIUXDesginer:UIUXDesginer,
            AndroidDev:AndroidDev,
            },
            jobsummary:jobsummary,
            jobrequirement:jobrequirement,
            postedDate:date,
            deadlineDate:deadlineDate

          });
          await obj.save();
          return res.status(200).json({
            message: "jobposted succefully",
            date:deadlineDate,
            date2:date
        });
      } catch (err) {
        console.log(err);
      }
     
}
exports.jobdisplay=async function(req,res)
{
  
  const objectdata = await jobmodel.find({});
  console.log(objectdata)
  res.status(201).json(objectdata);

}
exports.details=async function(req, res)
{
   const id=req.body.id;
   console.log(id);
   const obj =await jobmodel.find({ _id:id});
   res.status(201).json(obj);
   console.log(obj);
}
exports.jobupdate=async function(req, res)
{
   const id=req.body.id;
   const user=req.body.user;
   console.log("hello world")
   console.log(id);
   console.log(user);
    
   let userdone= await user.appyjob(id);
   let   compdone = await jobmodel.find({_id:id});
let companydone =await compdone.companyjob(user._id)
  
if(userdone && companydone)
res.status(200).send("sucefully added job in user and company");

res.status(400).send("error updating company and user")
}