// Paradigma Functional Programming

// gaya penulisan kode imperatif
// =============================
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
    newNameswithexcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// gaya penulisan kode deklaratif
// ==============================
const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names1.map((name) => `${name}!` ); // what to solve

console.log(newNamesWithExcMark);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */