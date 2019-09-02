const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

admin.initializeApp();

var goMail = function (message) {
  const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  });
  const mailOptions = {
    from: gmailEmail,
    to: 'da-carva@hotmail.com',
    subject: 'Test',
    text: message,
  };

  const getDeliveryStatus = function(error, info) {
    if(error) {return console.log(error);}
    console.log('Message sent: %s', info.messageId);
  };
  console.log('Ready for delivery');
  transporter.sendMail(mailOptions, getDeliveryStatus);
};

exports.onDataAdded = functions.database.ref('/contacts/{sessionId}').onCreate((snap,context) => {
  const createdData = snap.val();
  var text = createdData.emailAddress;
  console.log(text);
  console.log('Testing functions');

  // goMail(text);
});



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
