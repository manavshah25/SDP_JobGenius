const router=require('express').Router();
const employee_user_controller=require('../controllers/employee.js')
console.log("employee")
router.post("/employeesignup",employee_user_controller.register);
router.post("/employeelogin",employee_user_controller.auth);
module.exports=router;