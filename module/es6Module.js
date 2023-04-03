// ES6 Module

import coffeStock from "./state.js";
import stock from "./state.js";

// index.js
import coffeeStock from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeStock);

// state.js
const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

export default coffeeStock;

const isCoffeMachineReady = true;

export {coffeStock, isCoffeMachineReady};

{
    "name": "coffeemachine",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    },
    "author": "",
    "license": "ISC"
}

import { coffeeStock1, isCoffeMachineReady1 } from "./state.js";

console.log(coffeStock);
console.log(isCoffeMachineReady);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/

import { coffeeStock2, isCoffeMachineReady2 } from "./state.js";

/* output
SyntaxError: The requested module './state.js' does not provide an export named 'stock'
*/