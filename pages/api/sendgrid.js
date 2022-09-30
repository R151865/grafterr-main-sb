// require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SG_API_KEY} = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  console.log(name,email,message)
  const msg = [
    {
      to: 'dikshantdesigns@gmail.com', // Change to your recipient
      from: 'dikshantjoshi198@gmail.com', // Change to your verified sender
      // cc:'dikshantjoshi97@gmail.com',
      subject: "to customer",
      html: `<p><strong>name: </strong>${name}</p>`,
    },
    {
      to: 'dikshant@fininfocom.com', // Change to your recipient
      from: 'dikshantjoshi198@gmail.com', // Change to your verified sender
      // cc:'dikshantjoshi97@gmail.com',
      subject: "To team",
      html: `<p><strong>name: </strong>${name}</p>
      <p><strong>email: </strong>${email}</p>    
      <p><strong>message: </strong>${message}</p>`,
    },
  ]
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}