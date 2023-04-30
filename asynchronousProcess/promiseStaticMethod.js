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

// Promise.race() hanya mengembalikan nilai Promise yang prosesnya paling cepat
const promise7 = new Promise((resolve) => setTimeout(() => resolve(7), 1000));
const promise8 = new Promise((resolve) => setTimeout(() => resolve(8), 2000));
const promise9 = new Promise((resolve) => setTimeout(() => resolve(9), 3000));

Promise.race([promise7, promise8, promise9])
.then((value) => console.log(value)); // 1 setelah 1 detik

const promise10 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise11 = new Promise((resolve) => setTimeout(() => resolve(11), 2000));
const promise12 = new Promise((resolve) => setTimeout(() => resolve(12), 3000));

Promise.race([promise10, promise11, promise12])
.then((value) => console.log(value))
.catch((error) => console.log(error.message)); // Ups

/** 
{
    status: 'fulfilled' | 'rejected',
    value: 'value of the Promise',
    reason: 'error of the Promise',
}
*/

const promise13 = new Promise((resolve) => setTimeout(() => resolve(13), 1000));
const promise14 = new Promise((resolve, rejected) => setTimeout(() => reject (new Error("Error")), 2000));
const promise15 = new Promise((resolve) => setTimeout(() => resolve(15), 1000));

Promise.allSettled([promise13, promise14, promise15])
.then((results) => console.log(results));
// [{status: "fulfilled", value: 13}, {status: "rejected",reason: Error}, {status: "fulfilled", value: 15}] setelah 3 detik




