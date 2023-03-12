const router=require('express').Router();
const jobpost_controller=require('../controllers/jobpost.js')
console.log("job route")
router.post("/jobpost",jobpost_controller.jobpost);
router.get("/data",jobpost_controller.jobdisplay);
module.exports=router;