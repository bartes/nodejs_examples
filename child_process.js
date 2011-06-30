var http = require("http")
var spawn = require("child_process").spawn
var server = http.createServer(function(req, res){
  res.writeHead(200,{"Content-type": "text/plain"})

  var child = spawn("tail", ["-f", "/var/log/system.log"])
  child.stdout.on("data", function(data) {
    res.write(data);
  })

  req.connection.on("end", function() {
    child.kill();
  })
});
server.listen(3001)

