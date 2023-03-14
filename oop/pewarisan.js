// Pewarisan
// =========

// WhatsAppService
class WhatsAppService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

// EmailService
class EMailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

const whatsapp = new MailService("+6281234567890");
const email = new MailService("dimas@dicoding.com");

whatsapp.sendDelayedMessage();
email.sendBroadcastMessage();

// Yang sudah benar inheritance-Pewarisan
class MailService1 {
  constructor(sender1) {
    this.sender1 = sender1;
  }

  sendMessage1(message, receiver) {
    console.log(`(this.sender) sent ${message} to ${receiver}`);
  }
}

// Kemudian kita warisi sifat dari MailService ke subclass WhatsAppService dan EmailService dengan menggunakan keyword extends seperti ini.
// Superclass
class MailService2 {
  constructor(sender) {
    this.sender2 = sender2;
  }

  sendMessage2(message2, receiver2) {
    console.log(`${this.sender2} sent ${message2} to ${receiver2}`);
  }
}

// Subclass
class WhatsAppService2 extends MailService2 {
  sendBroadcastMessage2(message2, receiver2) {
    for (const receiver2 of receivers) {
      this.sendMessage2(message2, receiver2);
    }
  }
}

// Subclass
class EmailService2 extends MailService2 {
  sendDelayedMessage2(message2, receiver2, delay2) {
    setTimeout(() => {
      this.sendMessage2(message2, receiver2);
    }, delay2);
  }
}

const whatsapp2 = new WhatsAppService2("+6281234567890");
const email2 = new EmailService2("robby@dicoding.com");

whatsapp2.sendMessage2("Hello", "+6280987654321");
whatsapp2.sendBroadcastMessage2("Hello", "+6280987654321");
whatsapp2.sendDelayedMessage2(); // error

email2.sendMessage2("Hello", "math@iew.com");
email2.sendDelayedMessage2("Hello", "math@iew.com", 3000);
email2.sendBroadcastMessage2(); // error

// Pewarisan tanpa ES6 Class
function MailService3(sender3) {
  this.sender = sender;
}

MailService3.prototype.sendMessage3 = function (message3, receiver3) {
  console.log(`${this.sender3} sent ${message3} to ${receiver3}`);
};

function WhatsAppService3(sender3) {
  MailService.call(this, sender3);
}

// Prototype inheritance
WhatsAppService3.prototype = Object.create(MailService3.prototype);
WhatsAppService3.prototype.constructor = WhatAppService3;

WhatsAppService3.prototype.sendBroadcastMessage3 = function (message3, receivers) {
  for (const receiver3 of receivers) {
    this.sendMessage(message3, receiver3);
  }
};

// Operator instanceof

// operand1 instanceof operand2

const whatsapp1 = new WhatsAppService1("+6281234567890");

console.log(whatsapp1 instanceof WhatsAppService1); // true
console.log(whatsapp1 instanceof EmailService1); // false

const whatsapp3 = new WhatsAppService3("+6281234567890");
const email3 = new EmailService3("robby@dicoding.com");

console.log(whatsapp3 instanceof WhatsAppService3); // true
console.log(whatsapp3 instanceof EmailService3); // false
console.log(whatsapp3 instanceof MailService3); // true

console.log(email3 instanceof EMailService3); // true
console.log(email3 instanceof WhatsAppService3); // false
console.log(email3 instanceof MailService3); // true
