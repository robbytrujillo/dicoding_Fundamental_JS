// Object-Oriented Programming
// ===========================

// Object Car
const car = {
  // properties
  brand: "Ford",
  color: "red",
  maxspeed: 200,
  chassisNumber: "f-1",
  // methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  }
}


const myCar = {
  // properties
  brand: "Tesla",
  color: "black",
  maxspeed: 250,
  chassisNumber: "t-1",
  // methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  }
}

const yourCar = {
  // properties
  brand: "BMW",
  color: "white",
  maxspeed: 300,
  chassisNumber: "b-1",
  // methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  }
}



console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning
