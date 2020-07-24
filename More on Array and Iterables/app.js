const numbers = [1,2,3];

const moreNumers = Array(5,2); //[5,2]
const emptyLength = Array(5); // [empty of 5 elements]

const yetMoreNumbers = Array.of(1,2); // [1,2]

const arraylistItems = Array.form(1,2); // [1,2]
const arraylistItems = Array.form('Hi!') // ['H', 'i', '!'];

const listItems = document.querySelectorAll('li');

const arraylistItems = Array.from(listItems);

// storing data in array

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticData = [[1,1.2][2,2.3]];
for(const data of analyticData){
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}
// push, unshift,pop, shift, splice...
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
// hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);

// slice - copy values

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// slice()
const storedResults = testResults.slice(); // we can add parameter in the slice(2) - select from 2 index

// concat()
const storedResults = testResults.concat(1,2); // [1,5.3,1.5,10.99,-5,10,1,2];

testResults.push(5.91); // [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

console.log(storedResults, testResults);