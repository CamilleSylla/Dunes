export default async function (req, res) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const PASSWORD = process.env.MAIL_PASS
    const transporter = nodemailer.createTransport({
      port: 587,
      host: "ssl0.ovh.net",
      auth: {
        user: 'contact@dunesgst.fr',
        pass: PASSWORD,
      },
      secure: false,
    })
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error, 1);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });
    const mailData = {
      from: 'contact@dunesgst.fr',
      to: 'contact@dunesgst.fr',
      subject: `Nouveau message du site internet de ${req.body.nom} !`,
      text: `Bonjour,
      Information : \n
      Nom : ${req.body.nom},
      Email : ${req.body.email},
      Subject : ${req.body.subject}
      Message : ${req.body.msg}
      `,
     }
  
     await new Promise((resolve, reject) => {
  
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.error(err);
          res.status(400).send(`${req.body.nom}, une erreur c'est produite, veuillez recommencer ulterieurement`)
          reject(err);
      } else {
          console.log(info);
          resolve(info);
      }
     })
    })
    res.status(200).send(`Merci ${req.body.nom}, nous vous répondrons dans les plus brefs delais`)
    console.log(req.body)
  
  }