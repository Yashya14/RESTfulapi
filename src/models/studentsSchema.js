const mongoose = require("mongoose");
const validator = require("validator");

// schema validation
const studentSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    minlength: 3,
  },
  email: {
    type: "String",
    required: true,
    unique: [true, "Email is already present"],
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid emial");
        }
    }
  },
  phone: {
    type: "Number",
    required: true,
    min:10,
    // max:10,
    unique: true
  },
  address: {
    type: "String",
    required: true
  }
});

// we will create a new collection 
const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;