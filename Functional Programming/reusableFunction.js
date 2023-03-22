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
