export default async function (req, res) {
  console.log(req.body);
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
    to: req.body.user_mail,
    subject: `Dunes GST : Confirmation de votre reservation pour l'entrainement ${req.body.training_name} le ${req.body.training_day} à ${req.body.training_start}`,
    text: `Bonjour ${req.body.user_name},
    Nous vous confirmons la reservation de votre entrainement : \n
    Réservé le : ${new Date(req.body.reservation_le).toLocaleDateString()},
    Entrainement : ${req.body.traning_name},
    Jour : ${req.body.traning_day}
    Heure : ${req.body.traning_start}\n\n

    Dans le cas ou vous ne pouvez pas etre present, merci de bien vouloir annuler l'entrainement directement depuis notre site internet ou de venir directement nous en informer en salle.
    `,
   }

   await new Promise((resolve, reject) => {

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.error(err);
        res.status(400).send(`${req.body.user_name}, une erreur c'est produite, veuillez recommencer ulterieurement`)
        reject(err);
    } else {
        console.log(info);
        resolve(info);
    }
   })
  })
  res.status(200).send(`Merci ${req.body.user_name}, votre créneaux a bien été enregistrer`)
}