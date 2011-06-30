var http = require("http")
var fs = require("fs")
var step = require("step")

var f = __dirname + "/free.jpg"
var file_size;
step(
    function get_stat(f){
      fs.stat(f,this);
    },
    function store_size(err, stat) {
      file_size = stat.size;
      this();
    },
    function read_file(){
      fs.readFile(f, this);
    },
    function server(err, data){
      var server = http.createServer(function(req, res){
        res.writeHead(200,
         {"Content-type": "image/jpeg",
         "Content-length": file_size})
        res.write(data)
        res.end();
      });
      server.listen(3001)
    }
)

