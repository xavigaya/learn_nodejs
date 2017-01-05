var http = require("http"),
  fs = require("fs");
  parser = require("./params_parser.js");

  var p = parser.parse;

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err,html){
    var html_string = html.toString();

    if(req.url.indexOf("favicon.ico") > 0 ){ return; }

    // Expressió regular que busca el contingut que hi ha entre claus
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    //var nombre = "";

    var parametros = p(req);

    for (var i = variables.length -1; i >= 0; i--){
      var variable = variables[i];
      //var value = eval(variables[i]);
      html_string = html_string.replace("{"+variables[i]+"}", parametros[variable]);
    };

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html_string);
    res.end();
  });
}).listen(8080);
