const user = require('../model/user')

exports.teacher_signUp =   (req, res) => {
    const singleuser = new user({
        email: req.body.email,
        password: req.body.password,
    })
    singleuser.save(singleuser).then(data => {
        res.redirect('/teacher-login');
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

exports.teacher_signin =   async (req, res) => {
    const Email = req.body.email;   
    const Pwd = req.body.password;   
        const User = await user.findOne({email:Email , password:Pwd});    
        if(!User){
          res.render("teacher/signin.ejs", {
            error : "Login with correct email , password"
          })
        }      
        res.redirect('/teacher-home');
};