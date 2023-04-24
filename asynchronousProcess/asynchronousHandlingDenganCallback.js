// Asynchronous Handling dengan Callback

// Pola Callback
function getUsers(callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];
    callback(users);
  }, 3000);
}

getUsers((users) => {
  console.log(users);
});

function userCallback(users) {
  console.log(users);
}

getUsers(usersCallback);

function getUsers1(isOffline1, callback1) {
  // simulate network delay
  setTimeout(() => {
    const users1 = ["John", "Jack", "abigail"];

    if (isOffline) {
      callback1(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback1(null, users);
  }, 3000);
}

function callback1(error, data) {
  // logika ketika proses asynchronous selesai
}

function usersCallback1(error1, data1) {
  if (error1) {
    console.log("process failed:", error1.message);
    return;
  }

  console.log("process success:", users);
}

getUsers1(false, usersCallback1); // process success: ['John', 'Jack', 'Abigail']
getUsers1(true, usersCallback1); // process failed: cannot retrieve users due offline

// index.js
//----------
const { getProvinces } = require("./utils");

// @TODO: call getProvinces() twices and log the result

// solution.js
//-------------
const { getProvinces } = require("./utils");

// solution
function provincesCallback(error, provinces) {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(provinces);
}

getProvinces(provincesCallback);
getProvinces(provincesCallback);

// Callback Hell
function getUserWeather(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.assert;
    ongamepadconnected(error.message);
    return null;
  }
}

const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

// index.js
//----------

const {
    getUser, getWeather
} = require('./utils')

function getUserWeather(userId, callback) {
    getUser(userId, (error, user) => {
        if (error) {
            callback(error, null);
        }

        getWeather(user.location, (error, weather) => {
           if (error) {
            callback(error, null);
           } 

           callback(null, {...user, ...weather });
        });
    });
}

getUserWeather(1, (error, userWeather) => {
    if (error) {
        console.log(error);
    }

    console.log(userWeather);  // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});


// utils.js
//----------
function getUser(id, callback) {
    setTimeout(() => {
        if (!id) {
            callback(new Error("User ID is required"), null);
        }

        callback(null,  { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
}

function getWeather(location, callback) {
    setTimeout(() => {
        if (!location) {
            callback(new Error("Location is required"), null);
        }

        callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
}

module.exports = { getUser, getWeather };


// gambaran kode yang memanfaatkan Promise dalam proses asynchronous-nya
//-----------------------------------------------------------------------
const { getUser, geyWeather } = require('./utils')