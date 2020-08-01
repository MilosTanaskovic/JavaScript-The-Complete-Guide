/**
 *  Set()
 */

const ids = new Set([1,2,3])

for( const entry of ids.entries() ){
    console.log(entry[0]);
}

//console.log(ids);

/**
 *  Map()
 */
 
const person1 = {name: 'Milos'};
const person2 = {name: 'Miciki'};

const personData = new Map([[person1, [{birtdate: 1993}]]]);

console.log(personData);