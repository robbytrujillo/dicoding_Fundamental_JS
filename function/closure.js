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