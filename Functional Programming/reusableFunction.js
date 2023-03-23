// Reusable Function

// Array Map
//----------
["Harry", "Ron", "Jeff", "Thomas"].map(() => {});
["Harry", "Ron", "Jeff", "Thomas"].map((name) => {});

const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name1) => {
  return `${name1}!`;
});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 *
 */

// Array Filter : merupakan fungsi bawaan dari data yang bertipe array di js
//--------------------------------------------------------------------------
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

// Array Reduce
//-------------
arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

// [...] adalah opsional parameter

const students1 = [
    {
        name: 'Harry',
        score: 60.
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = students1.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 * 
 */

// Array some
//-----------
arr.some(callback(element, [index], [array]), [thisArg])
// [...] adalah opsional parameter

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/

// Array find
//-----------
arr.find(callback(element, [index], [array]), [thisArg]);

const students2 = [{
  name: 'Harry',
  score: 60,
},
{
  name: 'James',
  score: 88,
},
{
  name: 'Bethy',
  score: 75,
}
];

const findJames = students2.find(student => student.name === 'James');
console.log(findJames);

/**
output
{ name: 'James', score: 88 }
**/

// Array Sort
//-----------
arr.sort([compareFunction])
// [...] adalah opsional parameter

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};

const sorting = array2.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/


