
//* урок 23
// ! метки break continue
// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level ${i}`);

//     for (let j = 0; j < 3; j++) {
//         console.log(`second level ${j}`);

//         for (let k = 0; k < 3; k++) {
//             if (k == 2) break first;
//             console.log(`third level ${k}`);
            
//         }
//     }
// }

// ! цикл в цикле отрисовывает такую снежинку

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += '*';  
        
//     }

//     result += '\n';
// }


// console.log(result);

//! Задачи по циклам 
//* первая задача на циклы
// for (let i = 5; i < 11; i++) {
//     console.log(i);
    
// }
// //* вторая здача на циклы

// thirteenBreak: for (let i = 20; i > 9; i--) {
//     if(i == 13) break thirteenBreak;
//     console.log(i);
// }

// //* третья задача по выводу четных чисел

// evenNumbers: for (let i = 2; i < 11; i++) {
//     if(i % 2 == 1) continue evenNumbers;
//     console.log(i);
// }

// //* переписать цикл с for на while 
// //todo было 
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// //* стало
// let i = 2;

// while ( i <= 16 ) {
//     if( i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//         i++;
//     }
// }

// //*  решение 5 задачи 
// let arr = [];
// let indexArray = 0;
// for (let i = 5; i < 11; i++) {
//     arr[indexArray] = i;
//     indexArray += 1;
    
// }

// console.log(arr );
//* повышенный уровень задача 1 
// const arrFive1 = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arrFive1.length; i++) {
//     result[i] = arrFive1[i];
    
// }

// console.log(result);
// //* повышенный уровень задач 2 задача

// const arrFive2 = [5, 10, 'Shopping', 20, 'Homework'];;


// for (let i = 0; i < arrFive2.length; i++) {
//     if(typeof(arrFive2[i]) === 'string') {
//         arrFive2[i] += ' - done';
//     } else {
//         arrFive2[i] *= 2;
//     }
    
// }
// console.log(arrFive2);

//* задача 3 из повышенного уровня
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }

//     console.log(result);

//* задача на формирование фигуры
// let result = "";
// const length = 5;

// for (let i = 0; i <= length; i++) {
    
//     for (let j = 0; j < length - i; j++) {
//         result += ' ';  
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);
//! Урок 27 Задание на работу с функциями
//* task 1
// const userName = 'Anton';

// const sayHello = function(name) { 
//     return `Hello ${name}!`;
// };
// console.log(sayHello(userName));
// //*task 2
// function returnNeighboringNumbers(params) {
//     let i = 1;
//     return [params - i, params, params + i];
// }

// console.log(returnNeighboringNumbers(5));

// //*task 3  повышенная сложность но интересная задача очень 


// function getMathResult(a, b) {
//     if( typeof(b) != 'number' || b <= 0) {     // проверка на то что b не число и не отрицательное значение
//         return a;
//     }
    
//     let result = "";

//     for (let i = 1; i <= b; i++) {
//         if (i === b) {
//             result += `${a * i}`;
//         } else {
//             result += `${a * i}---`;
//         } 
//     }
//     return result;
// }

// console.log(getMathResult(4, 4));
console.log(Number.isInteger(-10));
//* Продвинутые задания на работу с функциями
//* задача 1
const calculateVolumeAndArea = function(a) { 
    if( typeof(a) != 'string' || a <= 0 || !Number.isInteger(a)) {
        console.log('При вычислении произошла ошибка');
    } else {


        let shape = `'Обьем куба: ${ a * a * a}, площадь всей поверхности ${ 6 * (a * a)}'`;
        console.log(shape);
    }

    
};
calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea("15");
calculateVolumeAndArea(-15);
//* задача 2  номер в купе вагона 
// const getCoupeNumber = function(a) { 
//     if( typeof(a) != 'number' || a < 0 || !Number.isInteger(a)) {
//         console.log('Ошибка проверте правильность выбранного места');
//     }  
//     if ( a === 0 ||  a > 36) {
//         console.log('Таких мест в вагоне не существует');
//     }

//     for (let i = 4; i <= 36; i + 4) {
//         if ( a < i) {
//             return Math.ceil( a / 4);
//         }
        
//     }
// };
// getCoupeNumber(33);
// getCoupeNumber(7);
// getCoupeNumber(300);
// getCoupeNumber(0);
// getCoupeNumber(7.7);
// getCoupeNumber(-10);
// getCoupeNumber('hello');
//* задача 3  первод минуты в часы
// const getTimeFromMinutes = function(minute) { 
//     if (typeof(minute) != 'number' || minute < 0 || !Number.isInteger(minute)) {
//         return console.log('Error check your data!');
//     }
//     let minuteAtHourse = 60;
//     let hours = Math.floor( minute / minuteAtHourse) ;
//     let minutes = minute % minuteAtHourse;
//     let houseStr = ''
//     switch (hours) {
//         case 0:
//             houseStr=  'часов';
//             break;
//         case 1:
//             houseStr= 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             houseStr= 'часа';
//             break;
        
//         default:
//             houseStr=  'часов';
//             break;
//     }
//     console.log(`Это ${hours} ${houseStr} и ${minutes} минут `);
// };
// getTimeFromMinutes(150);
// getTimeFromMinutes(50000);
// getTimeFromMinutes(0);
// getTimeFromMinutes(-150);
// getTimeFromMinutes("-150");
//* задача 4 выболр большего числа с помощью метода Math.max()

// const findMaxNumber = function(a, b, c, d) { 
//     if(typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
//         return console.log(0);
//     } 
    

//     return console.log(Math.min(a, b, c, d));


// };
// findMaxNumber(1, 2, 3, 4);
// findMaxNumber(1, 2, false, 4);
// findMaxNumber(1, "2", 3, "4");

//* Получение строки чисел фибоначи без рукурсии 

// const fib = function(digit) { 
//     if(typeof(digit) != 'number' || digit <= 0 || !Number.isInteger(digit)) {
//         return console.log("false");
//     }

//     let str = '';
//     let arr = [];
//     for (let i = 0; i < digit; i++) {
//         if( i === 0 || i === 1) {
//             arr[i] = i;
//         } else {
//             arr[i] = arr[ i - 1] + arr[ i - 2 ];
//         }
//     }

//     return console.log(arr.join(' '));
// };
// fib(4);
// fib(7);
// fib('4');
// fib(0);
// fib(-10);

//*  return string sith experience 
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng', 'kaz', 'uzb'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             node: '20%',
//             java: '10%',
//         },
//         exp: '1 month',
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками:`;
//         languages.forEach(item => {
//             str += `${item.toUpperCase()} `;
//         });
//         console.log(str) ;
        
//     }
// };
// console.log( personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// const showExperience = function(plan) { 
//         const {skills: {exp}} = plan;
//         return exp;
//     };
// showExperience(personalPlanPeter);

//* принимает обьект и возвращает строку в нужном виде 

// const showProgrammingLangs = function(plan) { 
//     let str =``;
//         for (let key in plan.skills.programmingLangs) {
//             if (plan.skills.programmingLangs == {}) {
//                 console.log(' ');
//             } else {
//                  str += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]} \n`;
//             }
            
//         }
//         console.log(str);
//     };
//     showProgrammingLangs(personalPlanPeter);
    
//* задачи на рабботу с массивами 
//! первая задача 
// const arrFamily = ['Peter', 'Ann', 'Alex', 'Linda'];
// const showFamily = function(array) { 
//     if (array.length === 0) {
//         console.log('Family is empty');
//     } else {
//         console.log(`Семья состоит из: ${array.join(' ')}`);
//     }
// };

// showFamily(arrFamily);
// //! вторая задача 
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// const favoriteCitie = function(array) { 

//         array.forEach((item) =>{
//             console.log(item.toLowerCase()); 
//         });
//     };

// console.log(favoriteCitie(favoriteCities)); 

// //! третья задача 
// const someString = 'This is some strange string';

// function reverse(str) {
//     let strNew = '';
//     if ( typeof(str) != 'string') {
//         console.log('error');
//     } else {
//         for (let  value of str) {
//             strNew = value + strNew;
//         }
//     }
//     return strNew;
// }
// console.log(reverse(someString));
// //! четвертая задача 
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const allValutes = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//     let str = `Доступные валюты:`;
//     if(arr.length === 0) {
//         str = 'Нет доступных валют'
        
//     } else  {
//         arr.forEach(item => {
//             if (item === missingCurr) {
//                 str +='';
//             } else  {
//                 str = `${str} \n ${item}`;
//             }
//         });
//     }
//     return str;
// }

// console.log(availableCurr(allValutes, 'RUB'));

//* задачи на обьекты и массивы усложненные  узнать хватит ли денег для оплаты отполения торгового центра 
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         },
//         {
//             width: 18,
//             length: 3,
//         }
//     ],
//     height: 15,
//     moneyPer1m3: 30,
//     budget: 55000
// }
// function isBudgetEnough(data) {
//     let shops = data.shops;
//     let squareShop = 0;
//     shops.forEach((item, i) => {
//         squareShop += item.width * item.length;
//     });
//     let volumeShops = squareShop * data.height;

//     if (volumeShops * data.moneyPer1m3 <= data.budget) {
//         console.log('Бюджета достаточно');
//     } else {
//         console.log('Бюджета недостаточно');
//     }
// }

// isBudgetEnough(shoppingMallData);

//*  распределение учеников по подгруппам 

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Lexa'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let a = [], b = [], c = [] , rest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// console.log( sortStudentsByGroups(students));

//* задача по поискуошибок 

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true,
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseFloat(fDish.price) + parseFloat(sDish.price) < parseFloat(average) ) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = data.waitors.slice();
    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}


console.log(transferWaitors(restorantData)); 
console.log(restorantData.waitors); 