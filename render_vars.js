var http = require("http"),
  fs = require("fs");

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err,html){
    var html_string = html.toString();

    // Expressió regular que busca el contingut que hi ha entre claus
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "XaviXaviXavi";

    //variable ['nombre']
    for (var i = variables.length -1; i >= 0; i--){
      var value = eval(variables[i]);

      html_string = html_string.replace("{"+variables[i]+"}", value);
    }

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html_string);
    res.end();
  });
}).listen(8080);
