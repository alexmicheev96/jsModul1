'use strict';

// 


//* return может возвращать значение функции на ружу 
// function ret() {
//     let num = 50;

//     return num;
// }

// console.log(ret1);
// const ret1 = ret();


// const FirstName = function(tet) { 
//     console.log(tet)
// };
// FirstName('hello');         


//* Пересчет валюты в js 


// let usdCount = 32;
// let eurCount = 46;
// let discount = 0.9;

// const currentCount = function(value, count) { 
//     return value * count;
// };


// const promoution = function(result) { 
//     return result * discount; 
// };
// const res = currentCount(500, usdCount);
// console.log(promoution(res));

//* функция и циклы 

// const test = function() { 
//    for (let i = 0; i <5; i++) {
//        console.log(i);
//        if (i === 3) {
//            return;    //! function end after keyworld return
//        }
//    }
//    console.log('done');
   
// };
test();
//! если мы ничего не передали в функцию(даже без return ) она все равно нам передает значение undefined
// const doNothing = function() { 
    
// };
// console.log(doNothing() === undefined);