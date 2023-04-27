// Asynchronous Handling dengan Promise
//--------------------------------------

// Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

// Pending merupakan keadaan Promise sedang berjalan.
// Fulfilled merupakan keadaan Promise yang terpenuhi.
// Rejected merupakan keadaan Promise yang gagal terpenuhi.

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