const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
  date: { type: String, required: true },
  attempt: { type: String, required: true },
  pass: { type: String, required: true },
  studentId: { type: String, required: true },
});

const TestsModel = mongoose.model("test", testSchema);

module.exports = TestsModel;
