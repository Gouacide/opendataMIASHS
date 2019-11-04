var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/manchester', function(req, res) {
  res.send('[united;city]');
});
