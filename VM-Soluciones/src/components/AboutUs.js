import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Brands from "./Brands";
import Strip from "./Strip";
import AboutCard from "./AboutCard";
import AboutUsImage from "../images/aboutus-image.svg"
import MissionIcon from "../images/mission-icon.svg"
import VisionIcon from "../images/vision-icon.svg"
import ValuesIcon from "../images/value-icon.svg"
import "../styles/aboutus.css"

export default function AboutUs(){
    return (
        <div className="aboutus--container">
            <Header
            imageSrc={AboutUsImage}
            className="cover--image"
            />
            <div className="aboutus--wrapper">
                <p className="aboutus--title">Sobre Nosotros</p>
                <div className="card--wrapper">
                    <AboutCard
                    imageSrc={MissionIcon}
                    imageAlt="A bullseye"
                    className="mission--card"
                    title="Misión"
                    description="Satisfacer las necesidades del mercado de seguridad, 
                    ofreciendo soluciones y servicios de la más alta calidad, respaldados 
                    por un equipo humano profesional e innovador que contribuye al 
                    bienestar de todos nuestros clientes. Es por esta razón que trabajamos 
                    diariamente para asistir a personas como usted."/>
                    <AboutCard 
                    imageSrc={VisionIcon}
                    imageAlt="An eye"
                    className="vision--card"
                    title="Visión"
                    description="Ser una empresa reconocida a nivel nacional, líder en el 
                    mercado de soluciones integrales de seguridad, con tecnología avanzada 
                    y un equipo humano orientado a brindar un servicio de excelencia al cliente."/>
                    <AboutCard
                    imageSrc={ValuesIcon}
                    imageAlt="Raised hands"
                    className="value--card"
                    title="Valores"
                    description="Excelencia, inovación y Fidelidad"/>
                </div>
            </div>
            <Brands/>
            <Strip/>
            <Footer />
        </div>
    )
}