//importing student model
const Student = require('../model/student');

const PostStudent = async (req, res) => {
    const singleStudent = new Student({
        name: req.body.name,
        roll: req.body.roll,
        dob: req.body.dob,
        score: req.body.score
    })
    singleStudent.save(singleStudent).then(data => {
        res.redirect('/teacher-home');
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });

};

const GetAllStudents = async (req, res) => {
   
    if(req.query.id){
        const id = req.query.id;

        Student.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Student.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
};

const GetStudentsById = async (req, res) => {
    const id = req.params.id;
    Student.findById(id).then(data =>{
            if(!data){
                res.status(404).send({ message : "Not found Student with id "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving Student with id " + id})
        })

};

const UpdateStudents = async (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
};

const DeleteStudents = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher-home")
  
};


//exporting teacher controller functions
module.exports = {
    PostStudent,
    GetAllStudents,
    GetStudentsById,
    UpdateStudents,
    DeleteStudents
}