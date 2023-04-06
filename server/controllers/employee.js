const employeeSchema = require('../models/employee');
const bcrypt = require("bcryptjs");
exports.register = async function (req, res) {
  console.log("hello jay")
  const {
    name,
    companyname,
    email,
    password,
  } = req.body;
  // console.log(username)
  try {
    // const userexit = await employeeSchema.findOne({
    //   email: email
    // });
    const companynameexist = await employeeSchema.findOne({
      companyname: companyname
    });
    if (companynameexist) {
      return res.status(422).json({
        error: "Your Company employee is already exists"
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
      const x = await object.save();
      if (x) {
        try {
          // 
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '20ceuof057@ddu.ac.in',
              pass: 'jay9898934789'
            }
          });

          // Define the email options
          let mailOptions = {
            from: '20ceuof057@ddu.ac.in',
            to: req.body.email,
            subject: 'SignUp Successfull!',
            text: "Welcome to the site.Let's make your future bright"
          };
          console.log(mailOptions)
          // Send the email
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          //})
        } catch (error) {
          console.log(error.message);
        }
      }
      // console.log(object)
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
    } else {
      console.log(employeelogin.password);
      console.log(password);
      const ismatch = await bcrypt.compare(password, employeelogin.password);
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