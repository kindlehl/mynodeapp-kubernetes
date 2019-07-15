var http = require('http');
var ip = require('ip');

var res_num = 0;

http.createServer(function (req, res) {
  res_num = res_num + 1;
  var status = res_num > 5 ? 401 : 200;
  res.writeHead(status, {'Content-Type': 'text/plain'});
  res.end('This is response number ' + res_num + ' to container at ' + ip.address());
}).listen(8080);
