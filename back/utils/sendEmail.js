var nodemailer = require("nodemailer");
const models = require("../database/models/index");
var axios = require("axios").default;

let remetente = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "moneytrack2020@gmail.com",
    pass: "moneytrack123"
  }
});

let mailOptions = {
  from: "moneytrack2020@gmail.com", // sender address
  to: "", // list of receivers
  subject: "", // Subject line
  html: "<p>Your html here</p>" // plain text body
};

async function sendEmails() {
  console.log("EMAILS ON");

  setInterval(async function() {
    var response = await models.Notificate.findAll();
    let currencies = await axios.get(
      "https://economia.awesomeapi.com.br/json/all"
    );

    response.map(notifyTo => {
      if (currencies.data[notifyTo.currency].ask <= notifyTo.value) {
        mailOptions = {
          to: notifyTo.email,
          subject: "NOTIFICAÇÃO MONEY TRACKER!",
          html: `<p>A moeda que você selecionou: <b>${notifyTo.currency}</b> chegou ao valor desejado ou está abaixo: <b>${notifyTo.value}</b></p>`
        };

        remetente.sendMail(mailOptions, async function(err, info) {
          if (err) {
            return err;
          } else {
            var beDestroyed = await models.Notificate.findByPk(notifyTo.id);
            await beDestroyed.destroy();
            console.log("EMAIL SENT");
            return info;
          }
        });
      }
    });
  }, 30000);
}

module.exports.sendEmails = sendEmails;
