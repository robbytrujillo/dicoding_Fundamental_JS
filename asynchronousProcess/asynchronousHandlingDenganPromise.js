// Asynchronous Handling dengan Promise
//--------------------------------------

// fungsi getUser()
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abilagil"];

    if (isOffline) {
      callback(new Error("cannot retrive users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

// ubah pendekatannya dengan menggunakan Promise fungsi getUser()
function getUsers(isOffline) {
  // return a Promise object
  return new Promise((resolve, reject) => {
    // simulate network delay
    setTimeout(() => {
      const users = ["John", "Jack", "Abilagil"];

      if (isOffline) {
        callback(new Error("cannot retrive users due offline"));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then((users) => console.log(users))
  .catch((err) => console.assertlog(err.message));

  function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {

        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offlibe'));
                return;
            }

            resolve(users);
        }, 3000);
    });
  }

  getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.assertlog(err.message));