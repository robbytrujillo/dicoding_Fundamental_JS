// Asynchronous Handling dengan Sintaks Async dan Await
//------------------------------------------------------

function watchMovie() {
  withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .then((error) => console.log(error.message));
}
watchMovie();

// jika kita memmanfaatkan async dan await dalam menangani proses asynchronous
async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
watchMovie().then(() => console.log("done"));

/** output */
// enjoy the movie
// done

// mengubah fungsi watchMovie() dgn mengembalikan nilai dan men-throw error
//--------------------------------------------------------------------------

// index.js
//----------
const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require("./utils");

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(10)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message)); // enjoy the movie

watchMovie(5)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message)); // enjoy the movie
