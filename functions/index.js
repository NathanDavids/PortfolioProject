const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

const SENDGRID_API_KEY =
  "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";
sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendEmail = functions.https.onCall(async (data, context) => {
  // Check if the requester is authenticated
  if (!context.auth) {
    return {error: "Not authorized."};
  }

  const msg = {
    to: data.to,
    from: "nathandavids935@gmail.com", // Replace with your email address
    subject: data.subject,
    text: data.text,
  };

  try {
    await sgMail.send(msg);
    return {message: "Email sent successfully!"};
  } catch (error) {
    console.error("Error sending email:", error);
    return {error: "Error sending email."};
  }
});
