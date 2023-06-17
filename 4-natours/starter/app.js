const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'This is a get method' });
// });

// app.post('/', (req, res) => {
//   res.status(200).send('You can post to this endpoint');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
