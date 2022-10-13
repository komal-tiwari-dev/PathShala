const express = require("express");
const TestsModel = require("../Models/test.model");

const testsRoutes = express.Router();




testsRoutes.get("/:studentID", async (req, res) => {
  const studentId = req.params.studentID;
  const items = await TestsModel.find({ studentId });
  return res.send(items);
});



testsRoutes.post("/:studentID/addtest", async (req, res) => {
  
  const studentId = req.params.studentID;
  const { subject, marks,date, attempt, pass } = req.body;
  // const now = new Date();
  const new_item = new TestsModel({
    subject,
    marks,
    date,
    attempt,
    pass,
    studentId,
  });
  await new_item.save();
  res.send({ message: "Item Created Successfully", item: new_item });
});



testsRoutes.patch("/:studentID/update/:testID", async (req, res) => {
  const studentId = req.params.studentID;
  const testId = req.params.testID;

  const test = await TestsModel.findOne({ _id: testId });
  console.log(test);
  if (test.studentId === studentId) {
    const updated_test = await TestsModel.findOneAndUpdate(
      { _id: testId },
      req.body,
      { new: true }
    );
    return res.send({ message: "Successfully updated", todo: updated_test });
  } else {
    return res.send("You are not Authorized");
  }
});




testsRoutes.delete("/:studentID/delete/:testID", async (req, res) => {
  const studentId = req.params.studentID;
  const testId = req.params.testID;
  const test = await TestsModel.findOne({ studentId: studentId });
  // console.log("test",test);
  if(test.studentId!=studentId){
    res.send("You are not authorized")
  }
  const deleted_test = await TestsModel.findOneAndDelete(
    { _id: testId },
    { new: true }
  );
  return res.send({
    message: "Successfully deleted",
    student: deleted_test,
  });
});

module.exports=testsRoutes