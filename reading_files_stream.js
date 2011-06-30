var http = require("http")
var fs = require("fs")
var f = __dirname + "/cat1.jpg"
fs.stat(f, function(err, stat) {
  if(err) throw err;
  var server = http.createServer(function(req, res){
    res.writeHead(200,
      {"Content-type": "image/jpeg",
      "Content-length": stat.size})
    fs.createReadStream(f).pipe(res)
  });
  server.listen(3005)
});

