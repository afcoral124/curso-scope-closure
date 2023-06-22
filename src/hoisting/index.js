
//hago un llamado a la variable perrito, variable que no ha sido declarada todavía
console.log(perrito); //arroja un Undefined

//solo aquí es declarada la variable
var perrito = "tomy";


//JS deteta en la linea 3 que la variable no ha sido declarada (pero que sí lo será líneas mas adelante) entonces lo que hace es elevar esa declaración, sin la asignación de valores, por lo que en la línea 3 se devuelve un undefined. Si la variable nunca es declarada en el código entonces ahí si sale un error de que la variable no existe. El hoisting funciona también con las declaraciones y llamados de funciones.

//el hoisting no funciona con variables declaradas con let y const. El hoisting tampoco funciona con funciones de expresión, solo con funciones DECLARATIVAS.