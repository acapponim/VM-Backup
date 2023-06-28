import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/servicecard.css'

export default function ServiceCard(props) {
    return (
      <div className='service--card'>
        <img src={props.imageSrc} alt={props.imageAlt} />
        <h3>{props.title}</h3>
        <Link to={props.path}>
        <button type={props.type} id={props.buttonId}><span>{props.buttonText}</span></button>
        </Link>
      </div>
    );
  }