// Promise Berantai
//------------------

function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Not enough money to withdraw'));
            }

            resolve(amount);
        }, 1000);
    });
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error('not enough money to withdraw'));
            }

            resolve('ticket-1');
        }, 1000);
    });
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('no ticket'));
            }

            resolve('enjoy the movie');
        }, 1000);
    });
}

function watchMovie() {
    withDrawMoney(10) 
        .then((money) => {
                return butCinemaTicket(money);
            })
        .then((ticket) => {
                return goInsideCinema(ticket);
            })
        .then((result) => {
                console.log(result);
            })
        .then((error) => {
                console.log(error.message);
            });
}

watchMovie();

// Terminal (server)
//-------------------
// enjoy the movie

function watchMovie() {
    withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .then((error) => console.log(error.message));
}

