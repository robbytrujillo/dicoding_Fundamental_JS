// Properti dan Method

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
}

const car1 = new Car("BMW", "red", 200, "b-1");
const car2 = new Car("audi", "blue", 220, "a-1");
const car3 = new Car("BMW", "red", 250, "b-2");

console.log(car1);
console.log(car2);
console.log(car3);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/

// Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya dapat bervariasi setiap kali membuat instance.
// Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan
// nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.
class Car1 {
  constructor(brand1, color1, maxSpeed1) {
    this.brand1 = brand1;
    this.color1 = color1;
    this.maxSpeed1 = maxSpeed1;
    // Set a random chassis number
    this.chassisNumber1 = "${brand}-${Math.floor(Math.random() * 1000) + 1}";
  }
}

const car4 = new Car1("BMW", "red", 200);
const car5 = new Car1("Audi", "blue", 220);
const car6 = new Car1("BMW", "red", 200);

console.log(car4);
console.log(car5);
console.log(car6);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
*/

// Properti Getter dan Setter
// ==========================

class Car3 {
  constructor(brand3, color3, maxspeed3) {
    this.brand3 = brand3;
    this.color3 = color3;
    this.maxSpeed3 = maxspeed3;
    this.chassisNumber3 = `${brand3}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car7 = new Car3("BMW", "red", 200);
car1.chassisNumber3 = "BMW-1";

console.log(car7);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
*/

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split("");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/

class Car2 {
  constructor(brand, color, maxSpeed4) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed4 = maxSpeed4;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const car8 = new Car2("BMW", "red", 200);
console.log(car8.chassisNumber);
car8.chassisNumber = "BMW-1";
console.log(car8.chassisNumber);

/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/

// Catatan
// -------
// mengubah atau mendapatkan nilai properti objek
// yang diawali dengan tanda underscore tidak direkomendasikan

// Method
// Method adalah sebuah fungsi yang berada di dalam sebuah class
// dan dapat diakses melalui instance Class tersebut. Method biasanya
// mengindikasikan hal yang dapat dilakukan oleh sebuah class.

class Car4 {
  constructor(brand2, color2, maxSpeed2) {
    this.brand2 = brand2;
    this.color2 = color2;
    this.maxSpeed2 = maxSpeed2;
    this._chassisNumber2 = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber2() {
    return this._chassisNumber2;
  }

  set chassisNumber2(chassisNumber2) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }

    // Methods
    send() {
        console.log(`Sending mail from ${this.sender} to ${this.reciver}`);
    }

    sendLater(delay) {
        console.log(`Sending after $(delay) ms`);

        setTimeout(() => {
            this.send();
        }, delay);
    }

    saveAsDraft() {
        console.log('Saving mail as draft');
    }
}
