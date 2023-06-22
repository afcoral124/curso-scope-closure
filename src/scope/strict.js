'use strict';  //modo estricto, para que las cosas tengan que ser como deben ser
pi = 3.1416;  //si creo una variable sin DECLARAR, js la declara por su cuenta, a no ser...
console.log(pi);


function myFunction (){
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction()); //error a propósito

/*el uso estricto se refiere a que se debe respetar las declaraciones de las variables.

Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.
*/