const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelecor('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild();
const backdrop = document.getElementById('backdrop');
const cancelButton = document.querySelector('#add-modal button.btn--passive');

// console.log(addMovieModal);
// console.dir(startAddMovieButton);
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};
const toggleMovieModal = () => { // function() {}

    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};
const backdropClickHandler = () => {
    toggleMovieModal();
}
const cancelAddMovie = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelButton.addEventListener('click', cancelAddMovie);
