const mongoose=require("mongoose");
const recommend =new mongoose.Schema({
 companyname:{type:String,require: [true, "Please enter company name"]},
 jobfunction :[
    {
        JavaDev:{
            type:String
        },
        PythonDev:{
            type:String
        },
        FullStackDev:{
            type:String
        },
        UIUXDesginer:{
            type:String
        },
        AndroidDev:{
            type:String
        },
    },
 ],
 title:{type:String,require: [true, "Please enter job title"]},
 

})


const jobrecommend =mongoose.model("JobDataset",recommend);

module.exports= jobrecommend; 