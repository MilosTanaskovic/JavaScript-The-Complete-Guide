// const person = {
//     name: 'Milos',
//     age: 26,
//     hobbies: ['Sport', 'Cooking'],
//     greet: function(){
//         alert('Hi there!');
//     }
// };

// // Adding, Modifying, & Deleting Properties
// //person.age = 31;
// delete person.age;
// person.isAdmin = true;

// console.log(person);
// person.greet();

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(title.trim() === '' && extraName.trim() === '' && extraValue.trim() === ''){
        return;
    }


const newMovie = {
    info: {
        title,
        [extraName]: extraValue
    },
    id: Math.random()
};

movies.push(newMovie);
console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);


