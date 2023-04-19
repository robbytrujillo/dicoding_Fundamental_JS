// My Custom Error

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}

// Kita dapat membuat kelas error sendiri dengan melakukan pewarisan pada kelas Error

// Manakah keyword berikut ini yang digunakan untuk membuat error secara manual? throw
