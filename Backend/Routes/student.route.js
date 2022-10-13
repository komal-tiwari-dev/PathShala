const express = require("express");
const StudentModel = require("../Models/student.model");
const TestsModel = require("../Models/test.model");

const studentRoute = express.Router();

studentRoute.post("/addstudent", async (req, res) => {
  const { studentName, gender, age, userId } = req.body;
  const new_item = new StudentModel({
    studentName,
    gender,
    age,
    userId,
  });
  await new_item.save();
  res.send({ message: "Student Added Successfully", student: new_item });
});

studentRoute.get("/", async (req, res) => {
  const q = req.query.q;
  const { userId } = req.body;
  const sortBy = req.query.sortBy;
  const filter = req.query.filter;

  // Search
  if (q) {
    const students = await StudentModel.find({ studentName: q });
    return res.send(students);
  }

  // sortBy
  if (sortBy == "asc") {
    // const { userId } = req.body;
    const students = await StudentModel.find({ userId }).sort({ age: 1 });
    return res.send(students);
  } 
  else if (sortBy == "desc") {
    const students = await StudentModel.find({ userId }).sort({
      age: -1,
    });
    return res.send(students);
  }

  if(filter=="Male"){
    const students = await StudentModel.find({ gender: filter });
    return res.send(students);
  }
  else if(filter=="Female"){
    const students = await StudentModel.find({ gender: filter });
    return res.send(students);
  }

  const students = await StudentModel.find({ userId });
  return res.send(students);
});

studentRoute.patch("/:studentID/update", async (req, res) => {
  const studentId = req.params.studentID;
  const userId = req.body.userId;
  console.log(studentId, userId);
  const student = await StudentModel.findOne({ _id: studentId });
  console.log(student);
  if (student.userId === userId) {
    const deleted_student = await StudentModel.findOneAndUpdate(
      { _id: studentId },
      req.body,
      { new: true }
    );
    return res.send({ message: "Successfully deleted", student: deleted_student });
  } else {
    return res.send("You are not Authorized");
  }
});


studentRoute.delete("/:studentID/delete", async (req, res) => {
  const studentId = req.params.studentID;
  const userId = req.body.userId;

  const student = await StudentModel.findOne({ _id: studentId });

  if (student.userId === userId) {
    const deleted_student = await StudentModel.findOneAndDelete(
      { _id: studentId },
      { new: true }
    );
    await TestsModel.deleteMany(
      { studentId: studentId }
    );
    return res.send({ message: "Successfully deleted", student: deleted_student });
  } else {
    return res.send("You are not Authorized");
  }
});

module.exports = studentRoute;
