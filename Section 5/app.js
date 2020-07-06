// var [Before ES6]
var name = 'Milos';

if( name === 'Milos'){
    var hobbies = ['Sports', 'Cooking'];
}

function greet(){
    var age = 26;
    var name = 'Miso';
    console.log(name, age, hobbies);
}
console.log(name, hobbies);
greet();

// let & const  [ES6+]

let name = 'Milos';
let hobbies;

if( name === 'Milos'){
    hobbies = ['Sports', 'Cooking'];
}

function greet(){
    let age = 26;
    let name = 'Miso';
    console.log(name, age, hobbies);
}
console.log(name, hobbies);
greet();