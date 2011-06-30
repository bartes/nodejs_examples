var http = require("http")
var fugue = require("fugue")
var server = http.createServer(function(req, res){
  res.writeHead(200,{"Content-type": "text/plain"})
  res.write("Hello");
  res.end();
  });

fugue.start(server, 3001, null, 2, {
  "master_pid_path": "/tmp/nodejs.pid"
})
