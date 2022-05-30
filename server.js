require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001;
require('./loaders/routes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log('Listening on port ' + port));