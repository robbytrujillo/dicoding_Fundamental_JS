// try and catch

try {
    // kode
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error) {
    // error handling
    console.log("Terjadi error!");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    // console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

/* output
Awal blok try
Akhir blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/

// try-catch-finally
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}

/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/

