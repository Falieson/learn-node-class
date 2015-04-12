var http = require('http');
var fs = require('fs');
var path = require('path');

var publicPath = path.join(__dirname, 'public');

var echoHandler = function(req, res) {
  if (req.method === 'POST') {
    /*
     * Your code here
     *
     */
    



    req.on('error', function(err) {
      res.writeHead(400, {
        'Content-Type': 'text/json'
      });
      res.end(JSON.stringify(err));
    });
  } else {
    //streaming File-Fuu, don't worry if this looks crazy, it just serves a file
    fs.createReadStream(path.join(publicPath, 'index.html'), {
      encoding: 'utf8'
    }).pipe(res);
  };
};

var server = http.createServer(echoHandler);

module.exports.echoHandler = echoHandler;
module.exports.server = server;






