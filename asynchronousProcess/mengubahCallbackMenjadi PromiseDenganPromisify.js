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
        }
    })
}
