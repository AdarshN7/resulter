const mongoose = require("mongoose")
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:String,
  score:Number 
});

module.exports = mongoose.model("student", studentSchema)