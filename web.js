var express = require('express');
var fs = require('fs');
var filename = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filedata = fs.readFileSync(filename);
  //var buffer = new Buffer(Buffer.byteLength(filedata));
  //buffer.write(filedata);
  //var outString = buffer.toString(filedata);
  outString = filedata.toString()
  response.send(outString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});