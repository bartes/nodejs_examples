var http = require("http")
var fs = require("fs")
var f = __dirname + "/free.jpg"
fs.stat(f, function(err, stat) {
  if(err) throw err;
  var server = http.createServer(function(req, res){
    res.writeHead(200,
      {"Content-type": "image/jpeg",
      "Content-length": stat.size})
    fs.readFile(f, function(err, data) {
      res.write(data)
      res.end();
    });
  });
  server.listen(3004)
});

