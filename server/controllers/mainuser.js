const registermodel=require('../models/register');
const bcrypt = require("bcryptjs");
exports.register=async function(req,res)
{
    console.log("hello manav")
    const {
        name,
        email,
        number,
        password,
        confpassword,
        workstatus,
      } = req.body;
      try {
        const userexit = await registermodel.findOne({
          email: email
        });
        const username = await registermodel.findOne({
          name: name
        });
        if (userexit && username) {
          return res.status(422).json({
            error: "email & name is exits"
          });
        } else {
          console.log("create user");
          const object = new registermodel({
            name,
            email,
            password,
            workstatus,
          });
          //  hasing of password before save
          await object.save();
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
      try {
        const userlogin = await registermodel.findOne({
            email: email
          });
        
          if (userlogin) {
            const ismatch = await bcrypt.compare(password, userlogin.password);
            if (!ismatch) {
              res.status(400).json({
                error: "invaild credientails"
              });
            } else {
              console.log("genrate");
              token = await userlogin.generateAuthToken();
              const obj = {
                message: "user sucesfully",
                token: token,
                loginuser: userlogin,
              };
      
              res.status(201).json(obj);
      
            }
          } else {
            res.status(400).send({
              error: "invailad crenteidatisl"
            });
          }
        
      } catch (err) {
        console.log(err);
      }
     
}