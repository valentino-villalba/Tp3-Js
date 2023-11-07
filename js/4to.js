function parOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  let numero = 7;
  
  let resultado = parOImpar(numero);
  document.write(resultado);