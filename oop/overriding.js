// Overriding
// ==========

// Constuctor Overriding
const mailService = new MailService(); // akan memanggil method constructor pada class MailService

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  // method lain disembunyikan
}

const mailService1 = new MailService1("someReceiver");
console.log(mailService);

/* Output:
MailService { sender: 'someReceiver' }
*/

// Method Overririding
// ===================
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);
    this.sender = sender;
    this.isBusiness = isBusiness;
  }
}

const whatsapp = new WhatsAppService("+6281234567890", true);

const mailService2 = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService2.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");

/**
 * Output:
 * ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 */

/**
 * Output:
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
 */
