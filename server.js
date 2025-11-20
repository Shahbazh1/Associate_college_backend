const express = require("express");
const cors = require("cors");
require("dotenv").config();
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const timetableRoutes = require("./routes/timetableRoutes");


const app = express();
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/students", studentRoutes);
app.use('/teachers',teacherRoutes);
app.use('/timetable',timetableRoutes);


// Start Server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
