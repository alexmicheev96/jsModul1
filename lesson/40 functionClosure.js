'use strict';

// let number = 5; debugger

// function logNumber() {

//     console.log(number);debugger
// }
// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger


function createCounter() {
    let counter = 0;

    const myFunction = function() { debugger
        counter = counter + 1; debugger
        return counter; debugger
    };
   
    return myFunction;
}
debugger
const increment = createCounter();   //* мы кладем в переменную инкремент функцию myFunction

const c1 = increment(); debugger //!1
const c2 = increment();  debugger//!2
const c3 = increment(); debugger //!3

console.log(c1, c2, c3);


console.log(0 || NaN || false || null);

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);

let str = 'hellof';
let strNew = str.slice(2);

console.log(strNew);