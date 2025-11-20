const { Teacher } = require("../models/teacher");


exports.createTeacher = async (req, res) => {
  try {
    const Teacher = await Teacher.create(req.body);
    res.status(201).json(Teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTeachers = async (req, res) => {
  try {
    const Teachers = await Teacher.findAll();
    res.json(Teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};