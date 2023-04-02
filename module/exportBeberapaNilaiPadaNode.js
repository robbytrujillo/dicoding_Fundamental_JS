// Export Beberapa Nilai pada Node.js
// ==================================

const { arabic, robusta } = require("./exportDanImport");

// berkas state.js
const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

const isCoffeMachineReady = true;

// tidak busa melakukan export dari kedua nilai di atas dengan cara seperti dibawah:
module.exports = coffeeStock;
module.exports = isCoffeMachineReady;

module.exports = {coffeeStock, isCoffeMachineReady};

Module {
    id: '.',
    path: '/home/dicoding/Playground/javascript/CoffeMachine',
    exports: {
        coffeeStock: {arabica: 100, robusta: 150, liberica: 200},
        isCoffeMachineReady: true
    },
    parent: null,
    filename: '/home/dicoding/Playground/javascript/CoffeMachine/state.js',
    loaded: false,
    children: [],
    paths: [
        '/home/dicoding/Playground/javascript/CoffeMachine/node_modules',
        '/home/dicoding/Playground/javascript/node_modules',
        '/home/dicoding/Playground/node_modules',
        '/home/dicoding/node_modules',
        '/home/node_modules',
        '/node_modules'
    ]

}

const {coffeeStock1, isCoffeMachineReady1} = require('./state');

console.log(coffeeStock1);
console.log(isCoffeMachineReady1);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/