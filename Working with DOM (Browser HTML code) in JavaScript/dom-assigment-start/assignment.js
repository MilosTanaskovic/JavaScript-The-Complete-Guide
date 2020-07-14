// Select this task (in two different ways at least!) and change the
// background-color to black, text-color to white.

const task1 = document.getElementById('task-1');
const task11 = document.getElementsByTagName('li:first-of-child');
const task111 = document.querySelector('li #task-1');

task1.style.backgroundColor = 'black';
task1.style.color = 'white';

task11.style.backgroundColor = 'silver';

// Change the document title

const task2 = document.head;
task2.querySelector('title').textContent = 'Assignment - Solved!';

// Select the h1 element on this page and change its
// text to "Assignment - Solved!".

const task3 = document.getElementsByTagName('h1');
task3.textContent = 'Assignment - Solved!';