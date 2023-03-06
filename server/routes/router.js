const express = require('express');
const route = express.Router();
const studentController = require('../controller/studentController');
const teacherController = require('../controller/teacherController');
const accountController = require('../controller/accountController');
const services = require('../services/render');

// homepage routes
route.get("/", services.homepage);
route.get("/login", services.login);

// student routes
route.get("/student-home",services.student_home);
route.post("/student-home",studentController.searchMarksheet);
route.get("/marksheet",services.marksheet);

// teacher routes
route.get("/teacher-home", services.teacher_home);
route.get("/teacher-login", services.teacher_login);
route.post("/teacher-login", accountController.teacher_signin);
route.get("/add", services.add_marks);
route.get("/update/:id", services.update_marks_get);
route.post("/update/:id", services.update_marks_post);


// API 
route.post('/api/student', teacherController.PostStudent);
route.get('/api/student', teacherController.GetAllStudents);
route.put('/api/student/:id', teacherController.UpdateStudents);
route.get('/delete/:id', teacherController.DeleteStudents);


module.exports = route

