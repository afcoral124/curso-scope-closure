function greeting(){
    let userName = 'Oscar';

    return function displayUserName(){
        return `Hello ${userName}`
    }
}

const g = greeting();
console.log(g);
console.log(g());