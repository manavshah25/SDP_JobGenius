const router = require("express").Router();
const { contact } = require("../models/contact");

exports.contact = async function (req, res) {
  console.log("hello");
  const { fullname, email, subject, message } = req.body;
  console.log(fullname);
  const object = new ContactSchema({
    fullname,
    email,
    subject,
    message,
  });
  await object.save();
  console.log(object);
  return res.status(200).json({
    message: "contact has been made sucessfully",
  });
};
