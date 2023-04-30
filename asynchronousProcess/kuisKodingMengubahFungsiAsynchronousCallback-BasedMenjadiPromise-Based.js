// Kuis Koding: Mengubah Fungsi Asynchronous Callback-Based Menjadi Promise-Based

/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

/**
const util = require('util');

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

module.exports = { getProvinces: getProvinces };

 */

const util = require('util');

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (countryId === 'id') {
      resolve([
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
    } else {
      reject(new Error('Country not found'));
    }
  }, 1000);
      });
}


module.exports = { getProvinces};

/**
Perubahan yang dilakukan adalah:
1. Menghilangkan parameter callback, karena fungsi ini akan mengembalikan sebuah Promise.
2. Membungkus seluruh logika asinkron dengan menggunakan sebuah Promise.
3. Jika countryId sama dengan 'id', maka akan memanggil fungsi resolve dengan parameter berupa array objek provinsi. Jika tidak sama dengan 'id', maka akan memanggil fungsi reject dengan parameter berupa error baru dengan pesan 'Country not found'.
4. Mengubah format penulisan module.exports agar sesuai dengan standar CommonJS (ES5).
*/
