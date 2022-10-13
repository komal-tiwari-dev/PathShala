const express = require("express");
const teacherRoute = require("./Routes/teacher.route");
const studentRoute = require("./Routes/student.route");
const testsRoute = require("./Routes/tests.route");
const connection = require("./Config/db");
const Authentication = require("./Middleware/authentication");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/teacher", teacherRoute);

app.use(Authentication);
app.use("/student", studentRoute);
app.use("/test", testsRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to server");
  } catch (err) {
    console.log("Error in connection", err);
  }
  console.log(`Listen on port ${process.env.PORT}`);
});
