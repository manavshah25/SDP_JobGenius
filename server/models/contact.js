const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  FullName: { type: String, require: [true, "Please enter your full name"] },
  EmailAddress: { type: String, require: [true, "Please enter email address"] },
  Subject: { type: String, require: [true, "Please enter subject"] },
  Message: { type: String, require: [true, "Please enter message"] },
});
const contact = mongoose.model("contact", ContactSchema);

module.exports = contact;
