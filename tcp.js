var net = require("net")
var carrier = require("carrier")
var connections = []
net.createServer(function(c){
  connections.push(c);
  c.write("Hello")
  carrier.carry(c, function(line) {
    connections.forEach(function(single){
      single.write(line)
    })
  })
}).listen(3001);
