function fruits(){

    if(true){   //un if es un ejemplo de un bloque ->   bloque es lo que esta entre los {}
        
        var fruit1 = `Apple`;  //var tiene alcance dentro de la funcion fruits -> function scope
        let fruit2 = `Kiwi`;   //let tiene alcance solo dentro del if -> block scope
        const fruit3 = `Banana`; //const solo tiene alcance dentro del if -> block scope
    }

    console.log(fruit1);
    console.log(fruit2);  //error a proposito
    console.log(fruit3);  //error a proposito
}

fruits();