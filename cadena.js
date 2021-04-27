//Saber si es un palindromo
function palindromo(palabra) {
  palabra = palabra.replace(/ /g, "").toLowerCase(); //quitar espacios a la oración y poner en minusculas para comparar
  palabraReves = palabra.split('').reverse().join(''); //voltear palabra
  return palabraReves == palabra ? true : false;
}

//contar palabras de un string
function contar(palabra) {
  palabra = palabra.split(' ');
  return palabra.length;
}

//Contar numero de letras sin espacios
function contarletras(palabra) {
  palabra = palabra.replace(/ /g, ""); //quitar espacios a la oración
  palabra = palabra.split('')
  return palabra.length;
}

//Contar vocales
function contarVocales(palabra) {
  palabra = palabra.replace(/ /g, "").toLowerCase(); //quitar espacios a la oración y poner en minusculas para comparar
  palabra = palabra.split('')
  let contar = 0;
  palabra.forEach(element => {
    if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") { contar++; }
  });
  return contar;
}

//contar consonates
function contarConsonantes(palabra) {
  return contarletras(palabra) - contarVocales(palabra);
}

module.exports.palindromo = palindromo;
module.exports.contar = contar;
module.exports.contarletras = contarletras;
module.exports.contarVocales = contarVocales;
module.exports.contarConsonantes = contarConsonantes;
