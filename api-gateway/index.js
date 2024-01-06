const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.API_GATEWAY_PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Microservices URLs
const TRAIN_SERVICE_URL = 'http://localhost:5001';
const USER_SERVICE_URL = 'http://localhost:5002';

// Train Service routes
app.get('/api/s-master/trains', async (req, res) => {
  try {
    const response = await axios.get(`${TRAIN_SERVICE_URL}/trains`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Train Service routes
app.get('/api/passenger/trains', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/trains`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/trains', async (req, res) => {
  try {
    const response = await axios.post(`${TRAIN_SERVICE_URL}/trains`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// User Service routes
app.post('/api/login', async (req, res) => {
  try {
    const response = await axios.post(`${USER_SERVICE_URL}/login`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
