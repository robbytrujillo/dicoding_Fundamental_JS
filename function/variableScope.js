// Varable Scope
// ============

// global variable, dapat diakses pada parent() dan child
const a = 'a';

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat di akses di luar dari fungsi tersebut.
    const b = 'b';

    function child() {
        // local variable, dapat diakses pada child().
        const c = 'c';
    }
}

// definisi variable
function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

console.log(total);

/* output
400
*/