// Arrow Function

//1.   Regular Function
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

//2. Arrow Function
// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

const sayName1 = (name1) => {
    console.log(`Nama saya ${name1}`)
}

sayName1("Asep");

/* output
Nama saya Asep
 */

