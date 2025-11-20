const { Timetable } = require("../models");

// Save timetable
exports.saveTimetable = async (req, res) => {
  try {
    const { session, class: className, groupName, field, timetable } = req.body;

    const newTimetable = await Timetable.create({
      session,
      class: className,
      groupName,
      field,
      timetable
    });

    res.status(201).json(newTimetable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get timetable
exports.getTimetable = async (req, res) => {
  try {
    const { session, class: className, groupName, field } = req.query;

    const timetableData = await Timetable.findOne({
      where: { session, class: className, groupName, field }
    });

    if (!timetableData)
      return res.status(404).json({ message: "Timetable not found" });

    res.json(timetableData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
