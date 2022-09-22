const express = require('express')
const employeeController = require('../controllers/Employee/employee.controller')
const verifyHR = require('../middlewares/verifyHr.middleware')
const verifyHrEmployee = require('../middlewares/verifyHrEmployee.middleware')
const verifyEmployee = require('../middlewares/verifyEmployee.middleware')
const verifyAdminHR = require("../middlewares/verifyAdminHR.middleware");


const router = express.Router()


router
  .route("/")
  .get( employeeController.getEmployees)
  .post(verifyAdminHR, employeeController.addEmployee);

router
  .route("/:id")
  .get(employeeController.getSingleEmployee)
  .put(verifyHrEmployee, employeeController.updateEmployee)
  .delete(verifyHR, employeeController.deleteEmployee);

router
    .route('/personal-info/:id')
    .get(verifyHrEmployee, employeeController.getPersonalInfo)
    .put(verifyEmployee, employeeController.updatePersonalInfo)


module.exports = router;