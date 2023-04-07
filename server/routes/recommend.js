const router=require('express').Router();
const recommend_controller=require('../controllers/recommend.js')
console.log("recommend")
router.post("/recommend",recommend_controller.skill);

module.exports=router;