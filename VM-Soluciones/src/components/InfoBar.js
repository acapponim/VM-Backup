import React from "react";
import PhoneIcon from "../images/phone-icon.svg";
import MailIcon from "../images/mail-icon.svg";
import ScheduleIcon from "../images/schedule-icon.svg";
import "../styles/infobar.css";

export default function InfoBar(){
  return (
    <div className="info--bar">
      <div className="info--bar--wrapper">
        <div className="phone--info">
          <img src={PhoneIcon} alt="Phone"></img>
          <p>+506 8960-5229</p>
        </div>
        <div className="mail--info">
          <img src={MailIcon} alt="Mail"></img>
          <p>info@vmsoluciones.net</p>
        </div>
        <div className="schedule--info">
          <img src={ScheduleIcon} alt="Clock"></img>
          <p>De 6h a 20h</p>
        </div>
      </div>
    </div>
  );
};