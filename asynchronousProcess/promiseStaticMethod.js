// Promise Static Method
//-----------------------

// contoh promise.all()
// main.js
//---------
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
.then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

// Jika terdapat rejection pada salah satu Promise
const promise4 = new Promise((resolve) => setTimeout(() => resolve(4), 1000));
const promise5 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(6), 3000));

Promise.all([promise4, promise5, promise6])
.then((values) => console.log(values))
.catch((error) => console.log(error)); // ups


const promise7 = new Promise((resolve) => setTimeout(() => resolve(7), 1000));
const promise8 = new Promise((resolve) => setTimeout(() => resolve(8), 2000));
const promise9 = new Promise((resolve) => setTimeout(() => resolve(9), 3000));

Promise.race([promise7, promise8, promise9])
.then((value) => console.log(value)); // 1 setelah 1 detik




