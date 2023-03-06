const mongoose = require("mongoose")
const { Schema } = mongoose;

//Student schema
const userSchema = new Schema({
  email: {
    type : String,
    unique : true
  } ,
  password: String 
});

module.exports = mongoose.model("users", userSchema)