'use strict';
let couner = 0;
const options = {
    name: 'alex',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        color: 'red,'
    }
};
for (let key in options) {
    if(typeof(options[key] === 'object')) {
       for (let i in options[key]) {
        console.log(`Property: ${i} has ${options[key][i]}`);
    }
    } else {
        console.log(`Property: ${key} has ${options[key]}`);
    }
}




const parentWomen = {
    wife: 'anna',
    father: 'alex',
    mother: 'nina',
    children: {
        big: 'smith',
        avrege: 'nick',
        small: 'makam',
    },
    makeTest: function() {
        console.log('test');
        
    }
};
const {wife, father ,mother,  children:{big , avrege, small}} = parentWomen;
console.log( big );
console.log(parent.makeTest());
console.log(Object.keys(parent));

let user = {
    imya: "John",
    years: 30
  };

let { imya, years:age, isAdmin = false} = user;

console.log(imya   ); 
console.log(age    );  
console.log(isAdmin);

let descriptor = Object.getOwnPropertyDescriptor(user, 'imya');
console.log(descriptor);

function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  
  let user1 = makeUser("John", 30);
  console.log(typeof user1); // John

  for (let key in user1) {
      console.log(`prop ${key} has ${user1[key]}`);
  }