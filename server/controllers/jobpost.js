const jobmodel=require('../models/jobpost');
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
            postedDate:date

          });
          await obj.save();
          return res.status(200).json({
            message: "jobposted succefully"
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