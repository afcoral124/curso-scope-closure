//variables

var a; //DECLARACIÓN de una variable

var b = "hola";   // Declaración y asignación

b = "adios";  //reasignación

var a = "hi!" //redeclaración junto con reasignación

//Global Scope
/*cualquier variable que se encuentre en el documento y por fuera de cualquier bloque o función
pasan a ser variables globales
y se estancian dentro del objeto window*/

var fruit = 'apple';
console.log(fruit);


function bestFruit(){
    console.log(fruit);
}

bestFruit();


//--------------------------------------------------------

function countries(){
    country = `Colombia`; //si la variable dentro de la función no se declara correctamente, queda con Scope Global
    console.log(country);
}

countries();
console.log(country);