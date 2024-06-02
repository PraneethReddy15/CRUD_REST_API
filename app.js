const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/studentdb');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});

const Student = mongoose.model('Student', studentSchema);

// Routes
// Create a new student
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a single student by ID
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a student by ID
app.patch('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a student by name
app.delete('/students/name/:name', async (req, res) => {
    try {
      const result = await Student.deleteMany({ name: req.params.name });
      if (result.deletedCount === 0) {
        return res.status(404).send({ message: `${req.params.name} not found` });
      }
      res.status(200).send({ message: `${req.params.name} deleted successfully`});
    } catch (error) {
      res.status(500).send(error);
    }
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
