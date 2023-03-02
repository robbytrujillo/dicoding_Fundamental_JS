// Destructuring Array ES6

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [fistFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

// const [fistFood1, secondFood1, thirdFood1, fourthFood1] = favorites1;

const [, , thirdFood1] = favorites1;
 
/* output:
Nugget
*/

// Destructuring Assignment

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/

// algoritma manual

var a = 1;
var b = 2;
var temp;

console.log("sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// algoritma manual seperti di atas menggunakan array destructuring assignment
[a, b] = [b, a]; // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// Devaults Values yang bernilai undefined

const favorites4 = ["Seafood"];
const [myFood4, herFood4] = favorites4;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
undefined
*/

// destructuring array diberikan nilai default pada variabel yang tidak dijangkau array
const favorites5 = ["Seafood"];

const [myFood6, herFood6 = "Salad"] = favorites6;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/

