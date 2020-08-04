const number = [1,2,3,4,5,6];

const numGreater5 = number.filter(val => val > 5);

console.log(numGreater5);

const mappedNumber = number.map(val => ({num: val}));
console.log(mappedNumber);

const multiplication = number.reduce((curResult, curValue) => curResult * curValue , 1);
console.log(multiplication);