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

// mengatasi error menggunakan throw 
const json3 = '{ "age": 20 }';
try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name); // undefined
    console.log(user.age); // 20
} catch (error) { 
    console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: 'name' is required.
*/

// variable belum terdefinisi
const json4 = '{ "name": "Yoda", "age": 20 }';

try {
    const user = JSON.parse(json4);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Yoda
    console.log(user.age); // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: errorCode is not defined
*/

// if statement
try {
    // ....
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
