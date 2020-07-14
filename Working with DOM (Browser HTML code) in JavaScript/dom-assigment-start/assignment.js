// Select this task (in two different ways at least!) and change the
// background-color to black, text-color to white.

const task1 = document.getElementById('task-1');
const task11 = document.getElementsByTagName('li:first-of-child');
const task111 = document.querySelector('li #task-1');

task1.style.backgroundColor = 'black';
task1.style.color = 'white';

task11.style.backgroundColor = 'silver';

