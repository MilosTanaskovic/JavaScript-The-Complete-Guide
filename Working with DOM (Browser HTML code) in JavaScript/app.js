const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'back';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + '(Changed!)';


const listItemElements = document.getElementsByTagName('li');

for(const listItemEl of listItemElements){
    console.dir(listItemEl);
}