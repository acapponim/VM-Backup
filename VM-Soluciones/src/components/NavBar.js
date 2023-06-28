import React from "react";
import { NavLink } from "react-router-dom";
import VMLogo from "../images/vm-logo.svg";
import "../styles/navbar.css";
import SideBar from "./SideBar";

export default function NavBar(){
    return (
        <nav className="navbar--container">
            <img src={VMLogo} alt="Logo" />
            <SideBar/>
            <ul className="navlinks--list">
                <li>
                    <NavLink activeClassName="active" to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/AboutUs" activeClassName="active">Sobre Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/Team" activeClassName="active">Equipo de Trabajo</NavLink>
                </li>
                <li>
                    <NavLink to="/OurServices" activeClassName="active">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" activeClassName="active">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    )
}