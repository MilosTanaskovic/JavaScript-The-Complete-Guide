function sayHello11(name) {
  console.log('Hi ' + name);
}

sayHello11('Miciki');

// 1. Re-write the function as an arrow function

const sayHello12 = (name) => console.log('Hi ' + name);

sayHello12('Milos');

// 2. 

const sayHello21 = () => console.log('Hi' + 'Milos');

const sayHello22 = (name) => {
  console.log('Hi' + name)
};

const sayHello23 = (hi, name) => {
  console.log( hi + name);
};

const sayHello24 = (name) => {
  return console.log(name);
};

sayHello23('Hi', 'Miki');
sayHello24('Gidra');

// 3 Add a default argument to the function you created: A fallback value for the phrase if no value is provided.

const sayHello31 = (name = 'Milos') => {
  console.log(` Hi ${name}`);
};

sayHello31('Gidra');




