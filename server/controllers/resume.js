const resumeeducation=require('../models/education')
const resumeexperience=require('../models/experience')
const resumepersonaldetail=require('../models/personaldetail')
const resumeskills=require('../models/skills')

exports.personaldetail=async(req,res)=>{
    console.log("personal")
    try{
        const {fname,lname,email,city,country,pincode,mobile}=req.body;
        // console.log(email)
        //saving a new user account to database
        const detail = new resumepersonaldetail({
            Firstname:fname,
            Lastname:lname,
            Email:email,
            City:city,
            Country:country,
            Pincode:pincode,
            Mobile:mobile
        })
        // console.log(detail._id)
        let msg=await detail.save();
        console.log(msg)
        // const emailexit = await resumepersonaldetail.findOne({
        //     email: email
        //   });
        //   if(emailexit){
        //     return res.status(200).json({
        //         error: "You have already created your Resume"
        //     });
        //   }
        //   else{
              return res.status(200).json({
                  message: "personaldetail register"
              });
        //   }
    }
    catch(err){
        console.log(err);
    }
}

exports.education=async function(req,res){
    try{
        
        const {email,schoolname,collagename,qualification,yearofgraduation}=req.body;
        // console.log(email)
        //saving a new user account to database
        const detail = new resumeeducation({
            Email:email,
            SchoolName:schoolname,
            CollageName:collagename,
            Qualification:qualification,
            YearOfGraduation:yearofgraduation,
            
        })
        // console.log(detail._id)
        let msg=await detail.save();
        console.log(msg)
        return res.status(200).json({
            message: "personaldetail register"
        });
    }
    catch(err){
        console.log(err);
    }
}
exports.experience=async function(req,res){
    try{
       
        const {email,jobtype,workedat,jobcity,startdate,enddate}=req.body;
        const experiencedetails = new resumeexperience({
            Email:email,
            jobType:jobtype,
            workedAt:workedat,
            jobcity:jobcity,
            StartDate:startdate,
            EndDate:enddate
        })
        await experiencedetails.save();
        return res.status(200).json({
            message:"experience register"
        });
        
    }
    catch(err){
        console.log(err);
    }
}

exports.skill=async function(req,res){
    try{
        const {email,Java,Python,React,ASPNET,dbms}=req.body;
        const skilldetail = new resumeskills({
            Email:email,
            Skills:{
                skill1:Java,
                skill2:Python,
                skill3:React,
                skill4:ASPNET,
                skill5:dbms
            }
        })
        await skilldetail.save();
        return res.status(200).json({
            message:"skills register"
        });
        
    }
    catch(err){
        console.log(err);
    }
}

exports.resume=async function(req,res){
    console.log("Resume Display")
    const {email}=req.body
    // console.log(email)
    const education = await resumeeducation.findOne({
        Email: email
      });
    console.log(education)
    const personaldetail = await resumepersonaldetail.findOne({
        Email: email
      });
    console.log(personaldetail)
    const experience = await resumeexperience.findOne({
        Email: email
      });
    console.log(experience)
    const skill = await resumeskills.findOne({
        Email: email
      });
    console.log(skill)
    const obj={
        personaldetail,education,experience,skill
    }
    res.status(200).json(obj)
}