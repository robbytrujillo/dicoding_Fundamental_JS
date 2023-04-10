// Throwing Errors
//----------------

const json = '{"name": "Robby", "age": 20 }';

try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// fungsi JSON.parse : melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object.

// jika json tidak sesuai dengan format object JS
const json1 = '{ bad json }';

try {
    const user = JSON.parse(json1);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/* output
SyntaxError
Unexpected token b in JSON at position 2
*/

const json2 = '{ "age": 20 }';

try {
    const user = JSON.parse(json2);

    console.log(user.name); // undefined
    console.log(user.age); // 20 
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}