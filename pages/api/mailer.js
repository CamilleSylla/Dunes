export default async function (req, res) {
  let nodemailer = require('nodemailer')
  require('dotenv').config()
  console.log(req.body)
  const PASSWORD = process.env.MAIL_PASS
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'camillesylla.web@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});
  const mailData = {
    from: 'camillesylla.web@gmail.com',
    to: process.env.MAIL_TO,
    subject: `Nouvelle demande d'essai ${req.body.nom} !`,
    text: `Bonjour,
    Vous avez recu une nouvelle demande de reservation d'essai : \n
    Nom : ${req.body.nom},
    Email : ${req.body.email},
    Téléphone : ${req.body.phone}`,
   }

   await new Promise((resolve, reject) => {

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.error(err);
        res.status(400).send(`${req.body.nom.value}, une erreur c'est produite, veuillez recommencer ulterieurement`)
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