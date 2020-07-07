const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
    console.log('Game is starting...');
}

const person = {
    name: 'Milos',
    greet: function greet(){
        console.log('Hello there!');
    }
}

person.greet();

console.dir(startGame); // functions are Objects!

startGameBtn.addEventListener('click', startGame);