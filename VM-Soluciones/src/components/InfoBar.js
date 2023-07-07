import React from "react";
import PhoneIcon from "../images/phone-icon.svg";
import MailIcon from "../images/mail-icon.svg";
import ScheduleIcon from "../images/schedule-icon.svg";
import "../styles/infobar.css";

export default function InfoBar(){

  const handlePhoneClick = () => {
    // Open WhatsApp window
    window.open('https://wa.me/50689605229', '_blank');
  };
  
  const handleEmailClick = () => {
    const mailtoLink = `mailto:info@vmsoluciones.net` +
    `?subject=${encodeURIComponent('Contacto - VM Soluciones')}`
    window.location.href = mailtoLink;
  };

  return (
    <div className="info--bar">
      <div className="info--bar--wrapper">
        <div className="phone--info" onClick={handlePhoneClick}>
          <img src={PhoneIcon} alt="Phone"></img>
          <p>+506 8960-5229</p>
        </div>
        <div className="mail--info" onClick={handleEmailClick}>
          <img src={MailIcon} alt="Mail"></img>
          <p>info@vmsoluciones.net</p>
        </div>
        <div className="schedule--info">
          <img src={ScheduleIcon} alt="Clock"></img>
          <p>De 8:00 a.m. a 5:00 p.m.</p>
        </div>
      </div>
    </div>
  );
};