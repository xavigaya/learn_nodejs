var express = require("express");

var app = express();

app.set("view engine", "jade");


// Accions HTTP => GET /POST / PUT / PATCH / DELETE
// REST


app.get("/", function(req, res){
  res.render("index", {hola: "Hola Xavi"});
});

app.get("/:nombre",function(req,res){
  res.render("form",{nombre: req.params.nombre});
});

app.post("/form", function(req,res){
  res.render("form");
});

app.listen(8080);
