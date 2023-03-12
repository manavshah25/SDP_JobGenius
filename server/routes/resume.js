const router=require('express').Router();
const resume_controller=require('../controllers/resume.js')
console.log("hello resume")
router.post("/education",resume_controller.education);
router.post("/experience",resume_controller.experience);
router.post("/personaldetail",resume_controller.personaldetail)
router.post("/skill",resume_controller.skill)
router.post("/resume",resume_controller.resume)

module.exports=router;