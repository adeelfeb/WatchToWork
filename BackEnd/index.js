// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Define a route to respond to GET requests at the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
