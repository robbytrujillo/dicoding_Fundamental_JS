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

    function callback1(error, data) {
        // logika ketika proses asynchronous selesai
    }

    function usersCallback1(error1, data1) {
        if (error1) {
            console.log('process failed:', error1.message);
            return;
        }

        console.log('process success:', users);
    }

getUsers1(false, usersCallback1); // process success: ['John', 'Jack', 'Abigail']
getUsers1(true, usersCallback1); // process failed: cannot retrieve users due offline

