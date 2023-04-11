const mongoose = require("mongoose");
const recommend = new mongoose.Schema({
  userId: { type: String, require: [true, "Please enter company name"] },
  jobfunction: [
    {
      JavaDev: {
        type: Number,
      },
      PythonDev: {
        type: Number,
      },
      FullStackDev: {
        type: Number,
      },
      UIUXDesginer: {
        type: Number,
      },
      AndroidDev: {
        type: Number,
      },
    },
  ],
});

const jobrecommend = mongoose.model("Jobrecommend", recommend);

module.exports = jobrecommend;
