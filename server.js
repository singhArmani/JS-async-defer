var express = require('express');
var app = express();
var path = require('path');

port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, ()=> console.log(`listening on port ${port}`));