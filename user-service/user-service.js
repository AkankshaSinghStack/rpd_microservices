const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.USER_SERVICE_PORT || 5002;

app.use(bodyParser.json());
const TRAIN_SERVICE_URL = 'http://localhost:5001';

// Simulated user data
const users = [
  { username: 'passenger1', password: 'passenger1password', role: 'Passenger' },
  { username: 'stationmaster1', password: 'stationmaster1password', role: 'Station Master' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Train Service routes
app.get('/trains', async (req, res) => {
  try {
    const response = await axios.get(`${TRAIN_SERVICE_URL}/trains`);
    console.log("text", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});
