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

const whatsapp2 = new WhatsAppService2('+6281234567890');
const email2 = new EmailService2('robby@dicoding.com');

whatsapp2.sendMessage2('Hello', '+6280987654321');
whatsapp2.sendBroadcastMessage2('Hello', '+6280987654321');
whatsapp2.sendDelayedMessage2(); // error

email2.sendMessage2('Hello', 'math@iew.com');
email2.sendDelayedMessage2('Hello', 'math@iew.com');
email2.sendBroadcastMessage2(); // error


