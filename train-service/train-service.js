const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.TRAIN_SERVICE_PORT || 5001;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
mongoose.connect('mongodb://localhost:27017/railwaydashboard');

const trainSchema = new mongoose.Schema({
  trainName: String,
  platformNumber: Number,
  arrivalTime: Date,
  departureTime: Date
});

const Train = mongoose.model('Train', trainSchema);

app.get('/trains', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/trains', async (req, res) => {
  const train = new Train(req.body);
  try {
    const newTrain = await train.save();
    res.status(201).json(newTrain);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add the new route for updating a train
app.put('/trains/:id', async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id, req.body, "pur");
    const updatedTrain = await Train.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTrain);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Train Service is running on port ${PORT}`);
});
