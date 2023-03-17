// Kuis Coding: Object-Oriented Programming

class Animal {
    constructor (name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  class Rabbit extends Animal {
    constructor (name, age) {
      super(name, age, true);
    }
    
    eat() {
      return `${this.name} sedang makan!`;
    }
  }
  
  class Eagle extends Animal {
    constructor (name, age) {
      super(name, age, false);
    }
    
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }
  
  const myRabbit = new Rabbit("Labi", 2);
  const myEagle = new Eagle("Elo", 4);
  
  console.log(myRabbit.name); // output: "Labi"
  console.log(myRabbit.age); // output: "2"
  console.log(myRabbit.isMammal); // output: "true"
  console.log(myRabbit.eat()); // output: "Labi sedang makan!"
  
  console.log(myEagle.name); // output: "Elo"
  console.log(myEagle.age); // output: "4"
  console.log(myEagle.isMammal); // output: "false"
  console.log(myEagle.fly()); // output: "Elo sedang terbang!"