import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import InfoBar from "./InfoBar"
import "../styles/headerlanding.css";
import LogoImage from "../images/vm-logo.svg"
import SideBar from "./SideBar";


export default function HeaderLanding(){

    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
        <header className='header--landing'>
            <InfoBar/>
            <div className='hero--cover'>
                <nav className="navbar--container--landing">
                    <SideBar/>
                    <ul className="navlinks--list--landing">
                        <li>
                            <NavLink to="/" activeclassName="active">INICIO</NavLink>
                        </li>
                        <li>
                            <NavLink to="/AboutUs" activeclassName="active">SOBRE NOSOTROS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Team" activeclassName="active">EQUIPO DE TRABAJO</NavLink>
                        </li>
                        <li>
                            <NavLink to="/OurServices" activeclassName="active">SERVICIOS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" activeclassName="active">CONTACTO</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="logo--container">
                    <div className="logo--wrapper">
                        <img src={LogoImage} alt="VM-Logo"/>
                        <p className="slogan">Hacemos todo posible</p>
                    </div>
                    <Link to="./Contact">
                        <button id="contactus-btn">
                            <span>Contáctenos</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}