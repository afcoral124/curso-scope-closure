//UN CLOSURE ES CUANDO UNA FUNCIÓN ACCEDE A UNA VARIABLE FUERA DE SU CONTEXTO
//Ej: una funcion interna hija accede a una variable que se encuentra en una función externa padre

const myGlobal = 0;

function myFunction(){ //funcion
    const myNumber = 1;
    console.log(`hola desde myFunction`)
    console.log(myGlobal);

    function parent(){ //funcion interna
        const inner = 2;
        console.log(`hola desde parent`)
        console.log(myNumber);
        console.log(myGlobal);

        function child(){
            console.log(`hola desde child`)
            console.log(inner);
            console.log(myNumber);
            console.log(myGlobal);
        }

        return child();
    }


    return parent();
}


myFunction();