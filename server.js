const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/out/index.html');
});

app.get('/main/*', (req, res) => {
  res.sendFile(__dirname + '/out/main/[test].html');
});

app.listen(port, hostname, () => {
  console.log(`Express app listening at http://${hostname}:${port}`);
});
