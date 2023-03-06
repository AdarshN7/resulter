//importing student model
const Student = require('../model/student');

const searchMarksheet = async (req, res) => {

        const Sturoll = req.body.roll;   
        const StuDob = req.body.dob;   
        const individualStudent = await Student.findOne({roll : Sturoll, dob:StuDob });    
        if(!individualStudent){
          res.render("student/home.ejs", {
            error : "Login with correct roll number"
          })
        }      
        res.render("student/marksheet.ejs", { Marksheet : individualStudent});
    };

module.exports={
    searchMarksheet
}