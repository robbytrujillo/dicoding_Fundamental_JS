// Asynchronous Handling dengan Promise
//--------------------------------------

// fungsi getUser()
function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abilagil'];

        if (isOffline) {
            callback(new Error('cannot retrive users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}