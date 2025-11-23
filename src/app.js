const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("../routes/auth.routes");
const studentRoutes = require("../routes/studentRoutes");
   
const { CLIENT_URL } = require("../config/env");

const app = express();

// Global Middlewares
app.use(express.json()); // must be ABOVE app.use("/auth", authRoutes)
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));


// Route Mounting
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
// ...more routes

module.exports = app;
