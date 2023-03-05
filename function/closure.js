// Closure

function init() {
    const name = 'Robby Ilhkus'; // variable lokal di dalam scope fungsi init


function greet() {  // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`);  // Inner function, merupakan contoh closure
}
    greet();
}

init();

/* output
Halo, 'Robby Ilhkus'
 */

function init1() {
    const name1 = 'Robby Ilhkus'; // variable lokal di dalam scope fungsi init


function greet1() {  // Inner function, merupakan contoh closure
    console.log(`Halo, ${name1}`);  // Inner function, merupakan contoh closure
}
    return greet1;
}

const myFunction = init();
myFunction();

/* output
Halo, 'Robby Ilhkus'
 */

let counter = 0;

const add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());
/* output
1
2
24
 */

const add1 = () => {
    let counter = 0;
    return () => {
        return++counter;
    };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output'
1
2
3
*/