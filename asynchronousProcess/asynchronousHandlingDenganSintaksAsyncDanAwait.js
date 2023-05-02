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
