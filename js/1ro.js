let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];
  
  document.write("Listado de meses:<br>");
  
  for (let i = 0; i < meses.length; i++) {
    document.write("▪️" + meses[i] + "<br>");
  }