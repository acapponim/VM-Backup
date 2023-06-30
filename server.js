const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Choose a suitable port for your server

// Enable JSON parsing for request bodies
app.use(express.json());

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, phone, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Update the SMTP configuration with your own email provider details
    // For example, using Gmail:
    service: 'Gmail',
    auth: {
      user: 'prismwavesoftware@gmail.com',
      pass: 'Rra!nI?tE61*57',
    },
  });

  // Prepare the email content
  const mailOptions = {
    from: email, // Sender's email address
    to: 'discipio28@hotmail.es', // Recipient's email address
    subject: 'Contact Form Submission',
    text: `
      Nombre: ${name}
      Teléfono: ${phone}
      Correo: ${email}
      Mensaje: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar correo');
    } else {
      console.log('Correo enviado:', info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
