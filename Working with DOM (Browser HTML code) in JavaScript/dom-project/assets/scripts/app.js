const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelecor('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild();

// console.log(addMovieModal);
// console.dir(startAddMovieButton);

const toggleMovieModal = () => { // function() {}

    addMovieModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
