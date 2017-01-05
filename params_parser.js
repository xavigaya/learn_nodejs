function parse(req){
  var arreglo_parametros = [], parametros = {};
  if(req.url.indexOf("?") > 0 ){
    var url_data = req.url.split("?");
    var arreglo_parametros = url_data[1].split("&");
  };

  for (var i = arreglo_parametros.length -1; i >= 0; i--) {
    var parametro = arreglo_parametros[i];
    var param_data = parametro.split("=");
    parametros[param_data[0]] = param_data[1];
  };
  console.log(parametros);
  return parametros;
};

module.exports.parse = parse;
module.exports.parse = parse;
