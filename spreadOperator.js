// Spread Operator 22022023
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFaforites = [favorites, others];
const allFaforites1 = [...favorites, ...others];

console.log(favorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

console.log(...favorites);
/* output
Seafood Salad Nugget Soup
*/

console.log(allFaforites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

console.log(allFaforites1);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

const obj1 = { firstname: "Obi-Wan", age: 30 };
const obj2 = { lastname: "Kenobi", gender: "M" };

newObj = { ...obj1, ...obj2 };

console.log(newObj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
