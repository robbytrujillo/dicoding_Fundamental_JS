// Asynchronous Handling dengan Callback

// Pola Callback
function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
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
        const users1 = ['John', 'Jack', 'abigail'];

        if (isOffline) {
            callback1(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback1(null, users);
    }, 3000);

    }
