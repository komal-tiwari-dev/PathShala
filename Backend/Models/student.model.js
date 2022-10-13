const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  userId: { type: String, required: true },
});

const StudentModel = mongoose.model("student", studentSchema);

module.exports = StudentModel;
