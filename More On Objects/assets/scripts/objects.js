const person = {
    name: 'Milos',
    age: 26,
    hobbies: ['Sport', 'Cooking'],
    greet: function(){
        alert('Hi there!');
    }
};

// Adding, Modifying, & Deleting Properties
//person.age = 31;
delete person.age;
person.isAdmin = true;

console.log(person);
person.greet();