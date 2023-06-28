import React from "react";
import { Link } from 'react-router-dom';
import OfficeImage from "../images/office-image.svg";
import CameraImage from "../images/camera-image.svg";
import Brands from "./Brands";
import Services from "./Services";
import Strip from "./Strip";

import "../styles/landing.css";

export default function MainLanding(){
    return (
        <main className="main--landing">
            <div className="info--about--section">
                <div className="info--about--wrapper"> 
                    <div className="info--about--top">
                        <div className="about--top--description">
                            <p className="aboutus--section--title">Sobre Nosotros</p>
                            <p className="paragraph--1">Detrás de cada empresa se encuentra una gran historia, y 
                                la nuestra es más que interesante. ¿Quiénes somos? 
                                ¿Cómo hemos creado este negocio? ¿Qué nos distingue como 
                                los mejores en lo que hacemos?</p>
                            <Link to="./AboutUs">
                                <button id="ourstory-btn"><span>Conozca nuestra historia</span></button>
                            </Link>
                        </div>
                        <img src={OfficeImage} alt="Someone Typing"></img>

                    </div>
                    <div className="info--about--bottom">
                        <img src={CameraImage} alt="A surveillance camera"></img>
                        <p className="paragraph--2--mobile">Creemos en lo que hacemos y por eso nos comprometemos a ayudar a 
                                más personas como usted todos los días. Para asegurarnos de que 
                                el proceso sea lo más transparente posible, existen muchas maneras 
                                en las que podemos trabajar juntos. </p>
                            <p className="paragraph--3--mobile">Nuestra variedad de servicios puede adaptarse según sus objetivos, su 
                                negocio o su proyecto. No lo olvide, nos especializamos en pensar con 
                                originalidad. Si está buscando nuevas formas de darle seguridad a 
                                su entorno elija a nuestro equipo para que le diseñe una solución 
                                verdaderamente única.</p>
                        <div className="paragraph--wrappers">
                            <p className="paragraph--2">Creemos en lo que hacemos y por eso nos comprometemos a ayudar a 
                                más personas como usted todos los días. Para asegurarnos de que 
                                el proceso sea lo más transparente posible, existen muchas maneras 
                                en las que podemos trabajar juntos. </p>
                            <p className="paragraph--3">Nuestra variedad de servicios puede adaptarse según sus objetivos, su 
                                negocio o su proyecto. No lo olvide, nos especializamos en pensar con 
                                originalidad. Si está buscando nuevas formas de darle seguridad a 
                                su entorno elija a nuestro equipo para que le diseñe una solución 
                                verdaderamente única.</p>
                        </div>
                    </div>
                </div>
            </div>  
                <div className="our--services--section">
                    <Services/>
                </div>

                <div className="brands--section">
                    <Brands/>
                </div>

                <Strip/>
              
        </main>
    )
  }