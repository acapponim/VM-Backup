import TeamImage from "../images/team-image.svg";
import Header from "./Header";
import Brands from "./Brands";
import UserCard from "./UserCard";
import WritingImage from "../images/writing-image.svg"
import TypingImage from "../images/typing-image.svg"
import Strip from "./Strip";
import Footer from "./Footer";
import "../styles/team.css"
import React from "react";

export default function Team(){
    return (
        <div className="team--container">
            <Header
            imageSrc={TeamImage}
            className="cover--image"
            />

            <div className="team--wrapper">
                <p className="team--title">Conozca a nuestro equipo</p>
                <div className="team--cards">
                    <UserCard
                    imageSrc={WritingImage}
                    imageAlt="Someone Writing"
                    className="writing--image"
                    title="Carlos Vargas"
                    description="Enfocado en dar soluciones 
                    y normativas a nivel de seguridad y todas 
                    sus ramas en su entorno de inteligencia y 
                    prevención de amenazas para tener un entorno 
                    seguro e inteligente para maximizar nuestros 
                    servicios."/>
                    <UserCard
                    imageSrc={TypingImage}
                    imageAlt="Someone Typing"
                    className="typing--image"
                    title="Alberto Vargas"
                    description="Empresario enfocado en sistemas financieros 
                    y atención al cliente, apasionado del trabajo en equipo 
                    para dar soluciones a nivel superior y personales a todos 
                    nuestros clientes."/>
                </div>
            </div>

            <Strip/>
            <Footer />
        </div>
        )
    }