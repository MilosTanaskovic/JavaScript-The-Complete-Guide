const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelecor('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild();
const backdrop = document.getElementById('backdrop');
const cancelButton = document.querySelector('#add-modal button.btn--passive');
const confirmAddMovieButton = cancelButton.nextElementSibling;
//const userInputs = addMovieModal.getElementsByTagName('input');
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

// console.log(addMovieModal);
// console.dir(startAddMovieButton);
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};
const toggleMovieModal = () => { // function() {}

    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};
const clearMovieInput = () => {
    for(const userInput of userInputs){
        userInput.value = '';
    }
};
const backdropClickHandler = () => {
    toggleMovieModal();
}
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5){
        alert(`Please enter valid values (rating between 1 and 5).`);
        return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
}
const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);