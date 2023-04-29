// Mengubah Callback Menjadi Promise dengan Promisify
//----------------------------------------------------

// Promisify
//-----------

// getUsers()
//------------
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

// menerapkan promise tanpa perlu mengubah secara manual
getUsersPromise(false)
    .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
    .then(err => console.log(err.message));

getUsersPromise(true)
    .then(users => console.log(users)) 
    .then(err => console.log(err.message)); // cannot retrieve users due offline

