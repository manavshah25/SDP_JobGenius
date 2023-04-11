const router=require('express').Router();
const recommend_controller=require('../controllers/recommend.js')
console.log("recommend")
router.post("/recommend",recommend_controller.skill);
router.post("/skillset",recommend_controller.skillset);

module.exports=router;