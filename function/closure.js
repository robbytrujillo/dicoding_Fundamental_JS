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