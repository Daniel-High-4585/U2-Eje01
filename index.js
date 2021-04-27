let cadena = require("./cadena");

let palabra = "Anita lava la tinas";

let resultado = cadena.palindromo(palabra) ? "La cadena es un palindromo \n" : "La cadena no es un palindromo \n";
resultado = resultado + "La cadena tiene "+ cadena.contar(palabra)+" palabra(s)\n";
resultado = resultado + "La cadena tiene "+ cadena.contarletras(palabra)+ " letras\n";
resultado = resultado + "La cadena tiene "+ cadena.contarVocales(palabra)+ " vocales\n";
resultado = resultado + "La cadena tiene "+ cadena.contarConsonantes(palabra)+ " consonantes\n";
console.log("La cadena evaluada es: "+palabra);
console.log(resultado);
