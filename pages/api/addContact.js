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
      from: 'support@dunesgst.fr',
      to: 'carmelosylla@gmail.com',
      subject: `${req.body.subject}`,
      text: `Bonjour,
      ${req.body.name} souhaite être recontacter pour l'événement du Samedi 29 mars : \n
      Nom : ${req.body.name},
      Email : ${req.body.email},
    Tel : ${req.body.tel}
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