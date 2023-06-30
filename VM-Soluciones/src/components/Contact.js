import React from "react";
import Footer from "./Footer";
import InfoBar from "./InfoBar";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import MailIcon from "../images/mail-icon.svg";
import PhoneIcon from "../images/phone-icon.svg";
import ContactImage from "../images/contact-image.svg"
import "../styles/contact.css"
import "../styles/infobarnavbar.css"

export default function Contact(){
    return (
            <div className="contactpage--container">
                <div className="infobar--navbar">
                    <InfoBar/>
                    <NavBar/>
                </div>
                 <div className="contact--image">
                    <div className="text--overlay">
                        <p>¡Póngase en contacto con nosotros!</p>
                    </div>
                </div>
                <ContactForm/>
                <div className="info--card">
                    <div className="more--info">
                        <p>Para más información</p>
                    </div>
                    <div className="contact--wrapper">
                        <ul className="contact--info">
                            <li><div className="email--info">
                                <img src={MailIcon} alt="Mail"></img>
                                <p>info@vmsoluciones.net</p></div></li>
                            <li><div className="phone--info">
                            <img src={PhoneIcon} alt="Phone"></img>
                            <p>+506 8960-5229</p></div></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }