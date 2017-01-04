var http = require("http"),
  fs = require("fs");

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err,html){
    res.writeHead(200,{"Content-Type":"application/json"});
    //res.write(html);
    res.write(JSON.stringify({nombre:"Xavi", username:"xgaya"}));
    res.end();
  });
}).listen(8080);
