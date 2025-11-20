const express = require("express");
const router = express.Router();
const timetableController = require("../controllers/timetable");

// Routes
router.post("/", timetableController.saveTimetable);
router.get("/", timetableController.getTimetable);


module.exports = router;
