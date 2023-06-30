const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001; // Change the port to 3001

// Enable JSON parsing for request bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, phone, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@vmsoluciones.net',
      pass: 'vmsoluciones2023',
    },
  });

  // Prepare the email content
  const mailOptions = {
    from: 'info@vmsoluciones.net', // Sender's email address
    to: 'info@vmsoluciones.net', // Recipient's email address
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
