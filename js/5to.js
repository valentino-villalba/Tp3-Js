function infoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else {
      return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
  }
  
  let entrada = prompt("Ingrese una cadena de texto: ");
  let resultado = infoCadena(entrada);
  document.write(resultado);