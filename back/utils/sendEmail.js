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
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <title>Money track Notificação</title> <!-- Designed by https://github.com/kaytcat --> <!-- Header image designed by Freepik.com --> <style type="text/css"> /* Take care of image borders and formatting */ img { max-width: 600px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } a img { border: none; } table { border-collapse: collapse !important; } #outlook a { padding: 0; } .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; } .backgroundTable { margin: 0 auto; padding: 0; width: 100% !important; } table td { border-collapse: collapse; } .ExternalClass * { line-height: 115%; } /* General styling */ td { font-family: Arial, sans-serif; } body { -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100%; height: 100%; color: #6f6f6f; font-weight: 400; font-size: 18px; } h1 { margin: 10px 0; } a { color: #27aa90; text-decoration: none; } .force-full-width { width: 100% !important; } .body-padding { padding: 0 75px; } .force-width-80 { width: 80% !important; } </style> <style type="text/css" media="screen"> @media screen { @import url( http://fonts.googleapis.com/css?family=Source+Sans+Pro:400, 600, 900 ); /* Thanks Outlook 2013! */ * { font-family: "Source Sans Pro", "Helvetica Neue", "Arial", "sans-serif" !important; } .w280 { width: 280px !important; } } </style> <style type="text/css" media="only screen and (max-width: 480px)"> /* Mobile styles */ @media only screen and (max-width: 480px) { table[class*="w320"] { width: 320px !important; } td[class*="w320"] { width: 280px !important; padding-left: 20px !important; padding-right: 20px !important; } img[class*="w320"] { width: 250px !important; height: 67px !important; } td[class*="mobile-spacing"] { padding-top: 10px !important; padding-bottom: 10px !important; } *[class*="mobile-hide"] { display: none !important; } *[class*="mobile-br"] { font-size: 12px !important; } td[class*="mobile-w20"] { width: 20px !important; } img[class*="mobile-w20"] { width: 20px !important; } td[class*="mobile-center"] { text-align: center !important; } table[class*="w100p"] { width: 100% !important; } td[class*="activate-now"] { padding-right: 0 !important; padding-top: 20px !important; } td[class*="mobile-resize"] { font-size: 22px !important; padding-left: 15px !important; } } </style> </head> <body offset="0" class="body" style="padding:0; margin:0; display:block; background:#eeebeb; -webkit-text-size-adjust:none" bgcolor="#eeebeb" > <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%" > <tr> <td align="center" valign="top" style="background-color:#eeebeb" width="100%" > <center> <table cellspacing="0" cellpadding="0" width="600" class="w320"> <tr> <td align="center" valign="top"> <table style="margin:0 auto;" cellspacing="0" cellpadding="0" width="100%" > <tr> <td style="text-align: center;"> <a href="#">Money Track</a> </td> </tr> </table> <table cellspacing="0" cellpadding="0" width="100%" style="background-color:#3bcdb0;" > <tr> <td style="background-color:#3bcdb0;"> <table cellspacing="0" cellpadding="0" width="100%"> <tr> <td style="font-size:40px; font-weight: 600; color: #ffffff; text-align:center;" class="mobile-spacing" > <div class="mobile-br">&nbsp;</div> NOVIDADES! <br /> </td> </tr> <tr> <td style="font-size:24px; text-align:center; padding: 0 75px; color:#6f6f6f;" class="w320 mobile-spacing; " > A moeda que você selecionou chegou ao preço escolhido. </td> </tr> </table> <table cellspacing="0" cellpadding="0" width="100%"> <tr> <td> <img src="https://www.filepicker.io/api/file/4BgENLefRVCrgMGTAENj" style="max-width:100%; display:block;" /> </td> </tr> </table> </td> </tr> </table> <table cellspacing="0" cellpadding="0" class="force-full-width" bgcolor="#ffffff" > <tr> <td style="background-color:#ffffff;"> <br /> <center> <table style="margin: 0 auto;" cellspacing="0" cellpadding="0" class="force-width-80" > <tr> <td style="text-align:left; color: #6f6f6f;"> <br /> Olá,<br /><br /> Você pediu pra a gente te avisar quando o <b>${notifyTo.currency}</b> chegasse a <b>${notifyTo.value}</b>. Estamos aqui pra te dizer que ela chegou no preço ou está ainda mais barato. Confira agora <a href="https://money-track.netlify.com" >clicando aqui</a >. <br /><br /> Obrigado por contar conosco!<br /> Equipe Money Track <br /> </td> </tr> </table> </center> <table style="margin:0 auto;" cellspacing="0" cellpadding="10" width="100%" > <tr> <td style="text-align:center; margin:0 auto;"> <br /> <div> <!--[if mso]> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://" style="height:45px;v-text-anchor:middle;width:220px;" stroke="f" fillcolor="#f5774e"> <w:anchorlock/> <center> <![endif]--> <a href="https://money-track.netlify.com" style="background-color:#f5774e;color:#ffffff;display:inline-block;font-family:'Source Sans Pro', Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:45px;text-align:center;text-decoration:none;width:220px;-webkit-text-size-adjust:none;" >Acesse o site</a > <!--[if mso]> </center> </v:rect> <![endif]--> </div> <br /> </td> </tr> </table> <table cellspacing="0" cellpadding="0" bgcolor="#363636" class="force-full-width" > <tr> <td style="background-color:#363636; text-align:center;" > <br /> <br /> </td> </tr> <tr> <td style="color:#f0f0f0; font-size: 14px; text-align:center; padding-bottom:4px;" > Money Track © 2020 Todos os direitos reservados </td> </tr> <tr> <td style="font-size:12px;"> &nbsp; </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </center> </td> </tr> </table> </body> </html>`
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
