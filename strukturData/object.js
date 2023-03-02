// tipe data object -> berguna dalam pengembangan app dgn JS
const user = {};

let object = { key1: "value1", key2: "value2", key3: "value3" };

const user1 = { firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true };

const user2 = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

console.log("Halo, nama saya ${user1.firstName} ${user1.lastName}");
console.log("Umur saya ${user1.age} tahun");
console.log('Saya berasal dari ${user["home world"]}');

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

user["home world"];


