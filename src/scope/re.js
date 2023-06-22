// --------VAR-------------------------------------------------

var firstName;  //declarando, se le asigna "undefined" como valor
firstName = `Oscar`;
console.log(firstName);

var lastName =`David`;  //Declarar y asignar
lastName = `Ana`;     //Reasignar
console.log(lastName);

var secondName = `David`;  //Declarando y asignando
var secondName = `Ana`;   //Redeclarando y Reasignando
console.log(secondName);


// --------LET------------------------------------------------

let fruit = `Apple`;  //Declarar y asignar
fruit = `Kiwi`;    //se puede reasignar
console.log(fruit);
//let fruit = `Banana`;  //NO SE PUEDE REDECLARAR UN LET

//--------CONST-----------------------------------------------

const animal = `dog`;  //declarar y asignar
//animal = `cat`;       //NO SE PUEDE REASIGNAR
//const animal = `Snake`;  //TAMPOCO SE PUEDE REDECLARAR
console.log(animal);


//-----------

const vehicles = [];  //Hay excepciones al modificar un const - NO SIGNIFICA INMUTABILIDAD
vehicles.push(`Kia`);
console.log(vehicles);

vehicles.pop()
console.log(vehicles);
