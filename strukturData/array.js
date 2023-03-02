// Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

myArray.push("Javascript"); //Fungsi push ini akan menambahkan data di akhir array.
console.log(myArray);
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

myArray.pop(); //Sedangkan untuk mengeluarkan data atau elemen terakhir dari array,
console.log(myArray);
/* output
[ Cokelat, 42.5, 22, true ]
*/

myArray.shift(); //Metode shift() digunakan untuk mengeluarkan elemen pertama dari array
myArray.unshift("Apple"); // unshift() digunakan untuk menambahkan elemen di awal array

console.log(myArray);
/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

/* output:
Cokelat
42.5
22
true
Programming
undefined // jika kita mengaksies nili array lebih dari indexnya
Panjang nilai myArray adalah 5.
*/

delete myArray[1];
console.log(myArray);
/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);
/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/
