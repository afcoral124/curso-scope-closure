function greeting(){
    let userName= `Ana`; //declaramos la variable dentro de la función, solo tendrá alcance dentro de esta función

    console.log(userName); //la llamamos y el sistema sabe que es

    if (userName===`Ana`){
        console.log(`Hello ${userName}!`);
    }
}

greeting();


console.log(userName); //genera error porque por fuera de la finción greeting la variable userName no se conoce
