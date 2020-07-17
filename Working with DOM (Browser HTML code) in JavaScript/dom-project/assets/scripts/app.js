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
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element_image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element_info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

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
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}
const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);