// MAP

const myMap = new Map([
  ["1", ["a String key"]],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);

/* output
3
England
4
India
 */

const wrongMap = new Map();

wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);

console.log(worngMap.has("My Key"));
console.log(worngMap.delete("My Key"));

/* output
false
false
 */