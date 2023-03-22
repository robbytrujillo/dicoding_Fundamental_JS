// Konsep-Konsep Functional Programming
//=====================================

// Pure Function : konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.
//----------------------------------------------------------------------------------------------------------------------------------------------------------

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// pure
const hitungLuasLingkaran1 = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingakaran1(4)); // 50.24
console.log(hitungLuasLingakaran1(4)); // 50.24
console.log(hitungLuasLingakaran1(8)); // 200.96
console.log(hitungLuasLingakaran1(8)); // 200.96

const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonwithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

const createPersonWithAge1 = (age, person) => {
  return { ...person, age };
};

const person1 = {
  name: "Bobo",
};

const newPerson1 = createPersonWithAge1(18, person);

console.log({
  person,
  newPerson,
});

/**
 * Output:
 *  {
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */

// Immutability
//=============
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map((name1) => `${name1}!`);

console.log({
  names,
  newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

const user1 = {
    firstname: 'Harry',
    lastName: 'Potter', // ups, typo!
}

const createuserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// Rekursif
//---------
const countDown = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while(start > 0);
};

countDown(10);

const cpuntDown1 = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
};

countDown(10);

// Higher-Order Function (first Class Function)
//---------------------------------------------

const hello = () => {
    console.log('Hello!')
};

const say = (somefunction) => {
    somefunction();
}

const sayhello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayhello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */





