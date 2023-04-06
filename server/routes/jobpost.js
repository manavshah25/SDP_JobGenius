const router=require('express').Router();
const jobpost_controller=require('../controllers/jobpost.js')
console.log("job route")
router.post("/jobpost",jobpost_controller.jobpost);
router.get("/data",jobpost_controller.jobdisplay);
router.post("/details",jobpost_controller.details);
router.post("/jobupdate",jobpost_controller.jobupdate);
router.post("/data",jobpost_controller.admin);
router.post("/jobuser",jobpost_controller.adminuser);
router.post("/delete",jobpost_controller.deleteuser);
router.post("/updateaccept",jobpost_controller.updateaccept);
router.post("/updatereject",jobpost_controller.updatereject);
router.post("/companycheck",jobpost_controller.companycheck);
module.exports=router;