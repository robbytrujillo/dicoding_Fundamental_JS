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