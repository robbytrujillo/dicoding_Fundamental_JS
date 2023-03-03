// Function Parameter
//===================

// parameter
// ---------
function multiply(a, b) {
  return a * b;
}

// argument : nilai atau expression yang dimasukkan ke dalam fungsi
// ----------------------------------------------------------------
multiply(3, 4);

// destructuring object
// --------------------
const user = {
    id: 24, 
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo Ren
*/

// Default Parameters
// ------------------
function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/* output
2^undefined = NaN
*/

// Solusi Default Parameters
// ------------------
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/* output
3^2 = 9
*/

// Rest Parameter
// --------------
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/
