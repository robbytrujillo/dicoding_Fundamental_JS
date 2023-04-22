// Asynchronous Handling dengan Callback

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