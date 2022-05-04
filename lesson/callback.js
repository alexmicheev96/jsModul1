

function first() {
    //do something
    setTimeout(() => {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();     //* 2. вместо параметра callback будет передан аргумент done соответсвенно здесь и будет вызвана наша функция
    
}

function done() {
    console.log('я прошел урок');
    
}

learnJS('JS', done); //* 1.функция done не вызывается она передается в нашу функцию в качестве аргумента, затем в определенный момент в коде она будет вызвана 