const express = require('express');
const app = express();
const port = 5000;

// This line added to check CI
app.get('/', (req, res) => {
  res.send('Horray! Your Express server is up and running.');
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
