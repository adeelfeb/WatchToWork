require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const dbURL = process.env.DATABASE_URL;
const secretKey = process.env.SECRET_KEY;

app.get('/', (req, res) => {
  res.send(`App is running on port ${port}, DB URL is ${dbURL}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
