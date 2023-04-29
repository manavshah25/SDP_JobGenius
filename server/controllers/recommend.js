const recommendmodel = require("../models/recommend");
const fs = require("fs");
exports.skill = async (req, res) => {
  const {
    userId,
    JavaDev,
    PythonDev,
    FullStackDev,
    UIUXDesginer,
    AndroidDev,
    
  } = req.body;
  try {

    const update=await recommendmodel.find({userId: userId})
if(update.length >0){

 var obj={
  JavaDev: parseInt(JavaDev),
  PythonDev: parseInt(PythonDev),
  FullStackDev: parseInt(FullStackDev),
  UIUXDesginer: parseInt(UIUXDesginer),
  AndroidDev: parseInt(AndroidDev),
 }
 update[0].jobfunction=obj;
 await update[0].save()

}
 else{
    const obj = new recommendmodel({
       userId: userId,
      jobfunction: {
        JavaDev: parseInt(JavaDev),
        PythonDev: parseInt(PythonDev),
        FullStackDev: parseInt(FullStackDev),
        UIUXDesginer: parseInt(UIUXDesginer),
        AndroidDev: parseInt(AndroidDev),
      }
    });
    // console.log(obj.title);
    await obj.save();}
    return res.status(200).json({
      message: "skills number successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
exports.skillset = async (req, res) => {
  userId=req.body.userId;
const obj= await recommendmodel.find({userId: userId});
if(obj[0]!=null)
res.status(201).json(obj[0].jobfunction[0]);
else
res.status(202)
};
