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
        const money =  await withDrawMoney(10);
        const ticket =  await buyCinemaTicket(money);
        const result =  await goInsideCinema(ticket);

        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
    }
watchMovie();



