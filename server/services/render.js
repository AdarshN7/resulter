const Student = require('../model/student');
const axios = require('axios');
const hostname = 'localhost';
const port = 3000;
// homepage routes
exports.homepage = (req, res) => {
    res.render("index")
};
exports.login =  (req, res) => {
    res.render("login");
};

// student routes
exports.student_home =  (req, res) => {
    res.render("student/home.ejs");
};
exports.marksheet =  (req, res) => {
    res.render("student/marksheet.ejs");
};

// teacher routes
exports.teacher_home = (req, res) => {
    axios.get(`http://${hostname}:${port}/api/student`).then((response)=>{
    res.render('teacher/home.ejs', { students : response.data });
    })
    .catch(err =>{
        res.send(err);
    })

};
exports.teacher_login =  (req, res) => {
    res.render("teacher/signin.ejs");
};
exports.add_marks =  (req, res) => {
    res.render("teacher/add.ejs");
};
exports.update_marks_get = async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/update.ejs", {student : user})
    
};
exports.update_marks_post = async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher-home")
};