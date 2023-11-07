function perRectangulo(ladoA, ladoB) {
    let perimetro = 2 * (ladoA + ladoB);
    return perimetro;
  }
  
  let ladoA = parseFloat(prompt("Ingrese el valor del lado A: "));
  let ladoB = parseFloat(prompt("Ingrese el valor del lado B: "));
  
  let resultado = perRectangulo(ladoA, ladoB);
  document.write(`El rectangulo tiene un perimetro de: ${resultado}`);