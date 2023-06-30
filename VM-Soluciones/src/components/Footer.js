import React from "react";
import MailIcon from "../images/mail-icon.svg";
import HomeIcon from "../images/home-icon.svg";
import PhoneIcon from "../images/phone-icon.svg";
import LineImage from "../images/line-image.svg";
import LogoImageFooter from "../images/vm-logo.svg"

import "../styles/footer.css";

export default function Footer(){
    return (
      <footer className="footer--class">
        <div className="footer--wrapper">
        <div className="footer--services">
          <div className="title--wrapper--services">
            <p>SERVICIOS</p>
            <img className="line--design--services" src={LineImage} alt="Line Design" ></img>
          </div>
            <ul className="services--list">
              <li>Venta e instalación de Cámaras de Seguridad</li>
              <li>Renta de Cámaras de Seguridad</li>
              <li>Repuestos</li>
              <li>Soporte Técnico</li>
            </ul>
          </div>
          <div className="logo--container--footer">
              <img src={LogoImageFooter} alt="VM-Logo"/>
              <p className="slogan--footer">Hacemos todo posible</p>
        </div>
          <div className="footer--contact">
            <div className="title--wrapper--contact">
              <p>CONTACTO</p>
              <img className="line--design--contact" src={LineImage} alt="Line Design"></img>
            </div>
            <ul className="contact--list">
              <li><div className="email--info">
                <img src={MailIcon} alt="Mail"></img>
                <p>info@vmsoluciones.net</p>
              </div></li>
              <li><div className="home--info">
                <img src={HomeIcon} alt="Home"></img>
                <p>Piedades de Santa Ana</p>
              </div></li>
              <li><div className="phone--info--footer">
                <img src={PhoneIcon} alt="Phone"></img>
                <p>+506 8960-5229</p>
              </div></li>
            </ul>
          </div>
        </div>
        <div className="footer--strip">
          <p>© 2023 Copyright | VM Soluciones</p>
        </div>
      </footer>
    )
  }