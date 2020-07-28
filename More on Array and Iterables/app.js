// const numbers = [1,2,3];

// const moreNumers = Array(5,2); //[5,2]
// const emptyLength = Array(5); // [empty of 5 elements]

// const yetMoreNumbers = Array.of(1,2); // [1,2]

// const arraylistItems = Array.form(1,2); // [1,2]
// const arraylistItems = Array.form('Hi!') // ['H', 'i', '!'];

// const listItems = document.querySelectorAll('li');

// const arraylistItems = Array.from(listItems);

// // storing data in array

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticData = [[1,1.2][2,2.3]];
// for(const data of analyticData){
//     for(const dataPoint of data){
//         console.log(dataPoint);
//     }
// }
// // push, unshift,pop, shift, splice...
// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// // slice - copy values

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // slice()
// const storedResults = testResults.slice(); // we can add parameter in the slice(2) - select from 2 index

// // concat()
// const storedResults = testResults.concat(1,2); // [1,5.3,1.5,10.99,-5,10,1,2];

// testResults.push(5.91); // [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// console.log(storedResults, testResults);
// // indexOf(), lastIndexOf()
// console.log(testResults.indexOf(5.3)); // 1
// console.log(storedResults.lastIndexOf(1)); // 6

//  const personData = [{name: 'Milos', id: 1}, {name:'Miciki', id: 2}];
//  console.log(personData.indexOf({name: 'Milos'})); // it doesn't work with indexOf() method

// // find() for Objects
// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Milos';
// });

// console.log(manuel);

/**
 *  Alternative to for loops: the forEach() method
 */

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxtAdjustedPrices = [];

// // for(const price of prices){
// //     taxtAdjustedPrices.push(price * (1+ tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const pricesObj = { index: idx, texAdjPrice: price * (1+ tax) };
//     taxtAdjustedPrices.push(pricesObj);
// });
// console.log(taxtAdjustedPrices);

/**
 * Transforming Data with map()
 */

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.18;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {
        index: idx,
        taxAdjPrice: price* (1 + tax)
    };
    return priceObj;
});

//console.log(prices, taxAdjustedPrices);

/**
 *  sort() ing and reverse() ing 
 */

const sortedPrices = prices.sort((a,b) => {
    if(a > b) return 1;
    else if(a === b) return 0;
    else return -1;
});

console.log(sortedPrices);
console.log(sortedPrices.reverse());

/**
 *  Filtering Array with filter()
 */

const filteredArray = prices.filter((price, index, prices) => {
    return price > 6;
});

console.log(filteredArray);

/**
 *  Where Arrow function shine!
 */
const filteredArrayShine = prices.filter(p => p > 6);

console.log(filteredArrayShine);

/**
 *  The important reduce() Method
 */
// const sum = 0;

// prices.forEach((price) => {
//     sum += price;
// })

const sum = prices.reduce((prevValue, currValue, currIndex, prices) => {
    return prevValue + currValue;
}, 0);

const sumShortly = prices.reduce((prevValue, currValue) => prevValue + currValue, 5);

console.log(sum);
console.log(sumShortly);