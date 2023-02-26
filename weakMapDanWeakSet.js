// WeakMap & WeakSet

let visitCountMap = new Map(); // Menyimpan Daftar User

function countUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let jonas = {name: "Jonas"};
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(visitCountMap);
}, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/
