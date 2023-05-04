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