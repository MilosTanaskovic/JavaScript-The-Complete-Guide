function sayHello11(name) {
  console.log('Hi ' + name);
}

sayHello11('Miciki');

// 1. Re-write the function as an arrow function

const sayHello12 = name => console.log('Hi ' + name);

sayHello12('Milos');

// 2. 

const sayHello21 = (hi, name) => {
  console.log( hi + name);
};

const sayHello22 = () => console.log('Hi' + 'Milos');

const sayHello23 = (name) => {
  console.log('Hi' + name)
};

const sayHello24 = (name) => {
  return console.log(name);
};

const sayHello241 = name => 'Hi' + name;

sayHello23('Hi', 'Miki');
sayHello24('Gidra');
sayHello241('Miciki');

// 3 Add a default argument to the function you created: A fallback value for the phrase if no value is provided.

const sayHello31 = (name = 'Milos') => {
  console.log(` Hi ${name}`);
};

sayHello31('Gidra');

// 4 Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.


function checkInput(cb, ...strings){
  let hasEmptyText = false;
  for(const text of strings) {   
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empty!')
},
'Hello',
'12'
);



