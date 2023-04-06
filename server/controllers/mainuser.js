const registermodel = require('../models/register');
const bcrypt = require("bcryptjs");
var nodemailer = require('nodemailer');
exports.register = async function (req, res) {


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
      const x = await object.save();
      console.log(req.body.email)
      // if (x) {
      //   try {
      //     // 
      //     let transporter = nodemailer.createTransport({
      //       service: 'gmail',
      //       auth: {
      //         user: '20ceuof057@ddu.ac.in',
      //         pass: 'jay9898934789'
      //       }
      //     });

      //     // Define the email options
      //     let mailOptions = {
      //       from: '20ceuof057@ddu.ac.in',
      //       to: req.body.email,
      //       subject: 'SignUp Successfull!',
      //       text: "Welcome to the site.Let's make your future bright"
      //     };
      //     console.log(mailOptions)
      //     // Send the email
      //     transporter.sendMail(mailOptions, function (error, info) {
      //       if (error) {
      //         console.log(error);
      //       } else {
      //         console.log('Email sent: ' + info.response);
      //       }
      //     });
      //     //})
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // }
      return res.status(200).json({
        message: "register sucessfully"
      });


    }
  } catch (err) {
    console.log(err);
  }

}
exports.auth = async function (req, res) {
  console.log("hello login")
  const {
    email,
    password,
  } = req.body;
  try {
    const userlogin = await registermodel.findOne({
      email: email
    });

    if (!userlogin) {
      return res.status(400).json({
        error: "invailad crenteidatisl"
      });
    } else {
      // console.log(userlogin.password);
      // console.log(password);
      const ismatch = await bcrypt.compare(password, userlogin.password);
      // console.log(ismatch);
      if (!ismatch) {
        return res.status(400).json({
          error: "invaild credientails"
        });
      } else {
        console.log("genrate employee");
        token = await userlogin.generateAuthToken();
        const obj = {
          message: "user sucesfully",
          token: token,
          loginuser: userlogin,
        };

        return res.status(201).json(obj);

      }
    }

  } catch (err) {
    console.log(err);
  }

}