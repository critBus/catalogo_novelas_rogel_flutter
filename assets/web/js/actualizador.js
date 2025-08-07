function ponerElementoDeLista(id, lista, indice, linea) {
  contenidoHtml = "";
  if (linea == undefined || linea === "") {
    linea = document.getElementById(id).innerHTML;
  }
  var element = lista[indice];
  lineaMomentanea = linea;

  Object.entries(element).forEach(([key, value]) => {
    lineaMomentanea = lineaMomentanea.replace("{" + key + "}", value);
  });

  //   for (var j = 0; j < element.length; j++) {
  //     var parAtributo = element[j];
  //     lineaMomentanea = lineaMomentanea.replace(
  //       "{" + parAtributo[0] + "}",
  //       parAtributo[1]
  //     );
  //   }
  lineaMomentanea = lineaMomentanea.replace("{indice}", indice + 1 + "");
  contenidoHtml += "\n" + lineaMomentanea;

  document.getElementById(id).innerHTML = contenidoHtml;
}

function put(llave, valor) {
  localStorage.setItem(llave, valor);
}

function get(llave) {
  return localStorage.getItem(llave);
}

var LLAVE_INDICE = "LLAVE_INDICE";

function irA(direccion) {
  location.href = direccion;
}
