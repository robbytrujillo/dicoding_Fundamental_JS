// Rangkuman Asynchronous Process

//1. contoh penerapan callback
function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        callback(users);
    }, 3000);
} 

function usersCallback(users) {
    console.log(users);
}

getUsers(usersCallback);

//2. callback hell
function getUserWeather(userId, callback) {
    getUserWeather(userId, (error, user) => {
        if (error) {
            callback(error, null);
        }

        getUserWeather(user.location, (error, weather) => {
            if (error) {
                callback(erro, null);
            }

         callback(null, { ...user, ...weather });   
        
        });
    })
}

getUserWeather(1, (error, getUserWeather) => {
    if (error) {
        console.log(error.message);
    }

    console.log(userWeather);
});

//3. memanfaatkan Promise dalam proses asynchronous
const { getUsers, getWeather } = require('./utils');

function getUserWeather(userId) {
    let user;

    return getUser(userId)
        .then((_user) => {
            user = _user;
            return getWeather(user.location)
        })
        .then((weather) => ({ ...user, ...weather }))
}

getUserWeather(1)
    .then(console.log)
    .catch(console.log);

//4. Asynchronous Handling dengan Promise
/*
Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

Pending merupakan keadaan Promise sedang berjalan.
Fulfilled merupakan keadaan Promise yang terpenuhi.
Rejected merupakan keadaan Promise yang gagal terpenuhi.
*/

function getUsers(isOffline) {
    // return a Promise object
    return new Promise((resolve, reject) => {

        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    });
}

// mengembalikan object Promise
getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));

//5. Mengubah Callback menjadi promise-based dengan fungsi promisify
const { promisify } = require('util');

function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

// kita memiliki fungsi getUsers(), tetapi menerapkan Promise tanpa perlu mengubahnya secara manual.
getUsersPromise(false)
.then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
.catch(err => console.log(err.message));

getUsersPromise(true)
.then(users => console.log(users))
.catch(err => console.log(err.message)); // cannot retrieve users due offline

/*
Namun, terdapat beberapa catatan ketika Anda hendak mengubah fungsi asynchronous callback-based menjadi Promise-based menggunakan util.promisify().

Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data). Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.
*/

//6. Promise Berantai
function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Not enough money to withdraw'))
            }

            resolve(amount)
}, 1000);
});
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money< 10) {
                reject(new Error('not enough money to buy ticket'))
            }

            resolve('ticket-1')
        }, 1000);
});
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('no ticket'))
            }

            resolve('enjoy the movie')
    }, 1000);
});
}

function watchMovie() {
    withDrawMoney(10)
    .then((money) => {
        return buyCinemaTicket(money)
    })
    .then((ticket) => {
        return goInsideCinema(ticket)
    })
    .then((result) => {
        console.log(result) 
    })
    .catch((error) => {
        console.log(error.message)
    });
}

watchMovie();

//7. Promise Static Method
//7a. Promise.all 
/*
digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen. Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam masing-masing Promise yang diletakkan pada array argumen. 
*/

//7b. Promise.race
/*
digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(), tetapi hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
*/

//7c. Promise.allSettled
/*
bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut.
*/

/*
{
    status: 'fulfilled' | 'rejected',
    value: 'value of the Promise' | 'error of the Promise',
}
*/

//7d. Promise.any
/*
Method Promise yang terakhir akan kami bahas adalah Promise.any(). Method ini bekerja mirip seperti Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.
*/

//8. Asynchronous Handling dengan Async dan Await
async function watchMovie() {
    try {
        const money = await withDrawMoney(10);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);

        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

watchMovie();