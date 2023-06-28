import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar--container'>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className={`line ${isOpen ? 'line-hidden' : ''}`} />
        <div className={`line ${isOpen ? 'line-hidden' : ''}`} />
        <div className={`line ${isOpen ? 'line-hidden' : ''}`} />
        {isOpen && <div className="close">X</div>}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className='sidebar--links'>
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
      </div>
    </div>
  );
}

