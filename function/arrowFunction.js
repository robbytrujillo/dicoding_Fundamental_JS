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

const sayHello1 = () => {
    console.log("Selamat pagi !")
}

sayHello1;

/* output
Selamat pagi !
 */

const sayName2 = name2 => console.log(`Nama saya ${name2}`);
sayName2("Robby");

const sayHello2 = () => console.log("Selamat Pagi !");
sayHello2();

/* output
Nama saya Robby
Selamat Pagi !
 */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */



