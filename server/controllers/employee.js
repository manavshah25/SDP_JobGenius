const employeeSchema=require('../models/employee');
const bcrypt = require("bcryptjs");
exports.register=async function(req,res)
{
    console.log("hello jay")
    const {
        name,
        companyname,
        email,
        password,
      } = req.body;
      // console.log(username)
      try {
        const userexit = await employeeSchema.findOne({
          email: email
        });
        const companynameexist  = await employeeSchema.findOne({
            companyname: companyname
        });
        if (userexit && companynameexist) {
          return res.status(422).json({
            error: "email & companyname is exits"
          });
        } else {
          console.log("create user");
          // console.log(username)
          const object = new employeeSchema({
            name,
            companyname,
            email,
            password,
          });
          //  hasing of password before save
          await object.save();
          console.log(object)
          return res.status(200).json({
            message: "register sucessfully"
        });
        }
      } catch (err) {
        console.log(err);
      }
     
}
exports.auth=async function(req,res)
{
    console.log("hello login")
    const {
        email,
        password,
      } = req.body;
      console.log(email)
      console.log(password)
      try {
        const employeelogin = await employeeSchema.findOne({
            email: email
          });
        
          if (!employeelogin) {
            return res.status(400).json({
              error: "invailad crenteidatisl"
            });
          }else{
            console.log(employeelogin.password);
            console.log(password);
            const ismatch =await bcrypt.compare(password, employeelogin.password);
            // console.log(ismatch);
            if (!ismatch) {
              return res.status(400).json({
                error: "invaild credientails"
              });
            } else {
              console.log("genrate employee");
              // token = await employeelogin.generateAuthToken();
              const obj = {
                message: "user sucesfully",
                // token: token,
                loginemployee: employeelogin,
              };
      
              return res.status(201).json(obj);
      
            }
          } 
        
      } catch (err) {
        console.log(err);
      }
     
}