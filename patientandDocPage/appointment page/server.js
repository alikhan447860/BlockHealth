const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const formData = req.body;

  // Process the data (e.g., store it in a database)

  // Send a response
  res.json({ message: 'Data received', formData: formData });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});