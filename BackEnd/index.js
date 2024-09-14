// index.js (Backend)
require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const dbURL = process.env.DATABASE_URL;
const secretKey = process.env.SECRET_KEY;

// Route to send basic app status
app.get('/', (req, res) => {
  res.send(`App is running on port ${port}, DB URL is ${dbURL}`);
});

// Route to send some data
app.get('/api/data', (req, res) => {
  const tempdata = {
    id: 1,
    name: 'temp',
    reg: 23
  };
  res.send(tempdata); // Use res.send to send the data as response
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
