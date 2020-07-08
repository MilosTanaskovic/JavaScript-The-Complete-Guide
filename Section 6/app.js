// const startGameBtn = document.getElementById('start-game-btn');

// function startGame(){
//     console.log('Game is starting...');
// }

// const person = {
//     name: 'Milos',
//     greet: function greet(){
//         console.log('Hello there!');
//     }
// }

// person.greet();

// console.dir(startGame); // functions are Objects!

// startGameBtn.addEventListener('click', startGame);

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();

    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid choice! W chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

startGameBtn.addEventListener('click', function(){
    console.log('Game is starting!');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});