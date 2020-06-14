alert('Hello Assigments JS');

/**
 * 
 *  Assignment 1
 */

/* 
    Assignment - Variables , Operators, Data Types
    1) Create two variables: One that holds a fictional user input (a number of your choice) and one that holds no value initially (e.g. "result").
    2) Set the result variable to 18 plus the value stored in user input.
    3) Add three additional lines of code where you change the result variable again (by subtracting a value of your choice, multiplying it and dividing it).
    4) Think about the value stored in the user input variable you also created - did that value change?
    5) alert() the result and the user input variables (in two separate alert() calls).
*/
            // let i = 0;
            // let result;

            // result = 18 + i;

            // result = (result - 10);
            //  result = result * result;
            //  result = result / result;
            //  alert(result);

/**
 *  Shadowed Variables
 **/ 

            // let userName = 'Milos';

            // function greetUser(name){
            //     let userName = name;
            //     alert(userName)
            // }

            // userName = 'Dragan';
            // console.log(userName);
            // greetUser('Miciki');

/*
    It indeed is not allowed on the same level/ in the same scope.

    So this would fail:
            let userName = 'Max';
            let userName = 'Manu';
    Why does it work in the first code snippet though?

    Because we first create a global variable userName via

    let userName = 'Max';
    But then we never re-declare that on the global level (that would not be allowed).

    We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".

    It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist.

    When referring to userName inside of the greetUser function we now always refer to the local, shadowed variable. Only if no such local variable existed, JavaScript would fall back to the global variable.
*/
/**
 * 
 *  Assigment 2 - Function
 */

/*
    1)

*/

   function firstFunc(){
       alert('Gidra');
   }
   function secundFunc(name){
        alert(name);
   }
   function thirdFunc(a, b, c){
        return (a + '+' + b + '+' + c);
   }

    //firstFunc();
    secundFunc('Miciki');
    let thirdFunc1 = thirdFunc('a','b','c');
    alert(thirdFunc1);

    task3Element.addEventListener('click', firstFunc);
