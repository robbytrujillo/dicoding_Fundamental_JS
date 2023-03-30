// Export & Import

// state.js -> kode export module.export
const coffeeStock = {
    arabic: 100,
    robusta: 150,
    liberica: 200
}

module.exports = coffeeStock;

// perintah node.state.js
Module {
    id: '.',
    path: '/home/dicoding/Playground/javascript/CoffeeMachine',
    exports: { arabica: 100. robusta: 150, liberica: 200},
    parent: null,
    filename: '/home/dicoding/Playground/javascript/CoffeeMachine/state.js',
    loaded: false,
    children: [],
    paths: [
        '/home/dicoding/Playground/javascript/CoffeeMachine/node_modules',
    '/home/dicoding/Playground/javascript/node_modules',
    '/home/dicoding/Playground/node_modules',
    '/home/dicoding/node_modules',
    '/home/node_modules',
    '/node_modules'
    ]
}

// perintah node state.js
//-----------------------

// index.js
const coffeeStock1 = require('./state');

console.log(coffeeStock1);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

// state.js
const coffeeStock1 = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

module.export = coffeeStock1;