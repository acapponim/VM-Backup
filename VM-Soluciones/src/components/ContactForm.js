import React, { useState } from 'react';
import '../styles/contactForm.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@mui/material';
import axios from 'axios';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false); // State variable for success alert

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/send-email', {
      name,
      phone,
      email,
      message,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        // Handle success, e.g., show a success message or redirect
        console.log('Correo enviado con éxito!');
        setSuccess(true); // Set success state to true
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error('Error al enviar correo:', error);
      });
  };

  const handleWhatsAppClick = () => {
    // Open WhatsApp window
    window.open('https://wa.me/50689605229', '_blank');
  };

  return (
    <div>
      <div className='contact--container'>
        <div className='contact--map--wrapper'>
          <form className='contact--form' onSubmit={handleFormSubmit}>
            {/* Render success alert when success state is true */}
            {success && (
              <Alert variant="filled" severity="success" onClose={() => setSuccess(false)}>
                 ¡Correo enviado con éxito!
              </Alert>
            )}
            <div className='contact--banner'>
              <p>Contáctenos a través de </p>
              <button
                className='whatsapp--button'
                onClick={handleWhatsAppClick}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='whatsapp--icon'
                  size='2x'
                  color='#27B179'
                />
                Whatsapp
              </button>
            </div>
            <div className='contentinput--wrapper'>
              <div className='namephone--wrapper'>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Nombre'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder='Teléfono'
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Correo'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder='Mensaje'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <button className='submit--button' id="submitButton" type='submit'>Enviar</button>
          </form>
          <div className="contact--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.459884032309!2d-84.21938!3d9.924382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fedcbc4fa925%3A0x1cf23f84017f7be7!2sPiedades%20de%20Santa%20Ana%2C%20San%20Jos%C3%A9%20Province%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1687491929004!5m2!1sen!2sus"
              className='embedded--map'
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className='contact--container--mobile'>
        <div className='contact--map--wrapper--mobile'>
          <form className='contact--form' onSubmit={handleFormSubmit}>
            {/* Render success alert when success state is true */}
            {success && (
              <Alert severity="success" onClose={() => setSuccess(false)}>
                Correo enviado con éxito!
              </Alert>
            )}
            <div className='contact--banner'>
              <p>Contáctenos a través de </p>
              <button
                className='whatsapp--button'
                onClick={handleWhatsAppClick}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='whatsapp--icon'
                  size='2x'
                  color='#27B179'
                />
                Whatsapp
              </button>
            </div>
            <div className='contentinput--wrapper'>
              <div className='namephone--wrapper'>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Nombre'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder='Teléfono'
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Correo'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder='Mensaje'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <button className='submit--button' id="submitButton" type='submit'>Enviar</button>
          </form>
        </div>
        <div className="contact--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.459884032309!2d-84.21938!3d9.924382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fedcbc4fa925%3A0x1cf23f84017f7be7!2sPiedades%20de%20Santa%20Ana%2C%20San%20Jos%C3%A9%20Province%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1687491929004!5m2!1sen!2sus"
            className='embedded--map'
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
