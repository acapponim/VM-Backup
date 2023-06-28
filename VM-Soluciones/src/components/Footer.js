import React from "react";
import MailIcon from "../images/mail-icon.svg";
import HomeIcon from "../images/home-icon.svg";
import PhoneIcon from "../images/phone-icon.svg";
import LineImage from "../images/line-image.svg";

import "../styles/footer.css";

export default function Footer(){
    return (
      <footer className="footer--class">
        <div className="footer--wrapper">
          <div className="footer--logo">
            <div className="title--wrapper">
              <p className="footer--title">VM SOLUCIONES</p>
              <img className="line--design" src={LineImage} alt="Line Design" ></img>
            </div>
            <p>Hacemos todo posible</p>
          </div>
          <div className="footer--services">
          <div className="title--wrapper">
            <p className="footer--title">SERVICIOS</p>
            <img className="line--design" src={LineImage} alt="Line Design" ></img>
          </div>
            <ul className="services--list">
              <li>Venta e instalación de Cámaras de Seguridad</li>
              <li>Renta de Cámaras de Seguridad</li>
              <li>Repuestos</li>
              <li>Soporte Técnico</li>
            </ul>
          </div>
          <div className="footer--contact">
            <div className="title--wrapper">
              <p className="footer--title">CONTACTO</p>
              <img className="line--design" src={LineImage} alt="Line Design"></img>
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
              <li><div className="phone--info">
                <img src={PhoneIcon} alt="Phone"></img>
                <p>+506 8960-5229</p>
              </div></li>
            </ul>
          </div>
          <div className="footer--links">
          <div className="title--wrapper">
            <p className="footer--title">ENLACES</p>
            <img className="line--design" src={LineImage} alt="Line Design" ></img>
          </div>
            <ul className="links--list">
              <li><a href="url">Aviso Legal</a></li>
              <li><a href="url">Política de Privacidad</a></li>
              <li><a href="url">Configuración de Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer--strip">
          <p>© 2023 Copyright | VM Soluciones</p>
        </div>
      </footer>
    )
  }