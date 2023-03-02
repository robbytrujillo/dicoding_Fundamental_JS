// Declaring Function

// 1. Parameter->variabel yang didefinisikan sebagai inputan dari sebuah fungsi
// ============================================================================
// function multiply(a, b) {
//     return a * b;
// }

// 2. Argument -> nilai atau expression yang dimasukkan ke dalam fungsi
// ====================================================================
// multiply(3, 4);

// setelah membuat fungsi dapat memanggil dengan :
// ===============================================
// function gretting() {
//   console.log("Good Morning!");
// }

// gretting();

/* output
Good Morning!
*/

// contoh fungsi gretting
// ======================
function gretting(name, language) {
  if (language === "English") {
    console.log("Good Morning ${name}!");
  } else if (language === "French") {
    console.log("Bonjour ${name}");
  } else {
    console.log("Selamat Pagi ${name}!");
  }
}

gretting("Harry", "French");

/* output
Bonjour Harry!
*/

// Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel.
// ====================================================================
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);

/* output
20
*/

// keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain. Seperti inilah fungsi greeting() jika kita ubah agar mengembalikan nilai string:
function gretting(name, language) {
  if (language === "English") {
    return "Good Morning ${name}!";
  } else if (language === "French") {
    return "Bonjour ${name}!";
  } else {
    return "Selamat Pagi ${name}!";
  }
}

let greetingMessage = gretting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

// 3. Expression Function
//  expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function. Berikut ini merupakan contoh penulisan expression function:
// ==================================================================
const greeting = function(name, language) {
    if (language === "English") {
        return "Good Morning" + name + "!";
      } else if (language === "French") {
        return "Bonjour " + name + "!";
      } else {
        return "Selamat Pagi"  + name + "!";
      }
}

console.log(gretting('Ron', 'English'));

/* output
Good Morning Ron!
 */



