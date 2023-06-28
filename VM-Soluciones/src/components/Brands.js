import React from 'react';
import BrandsImage from "../images/brands-image.svg";
import '../styles/brands.css'

export default function Brands(props) {
    return (
        <div className='brands--container'>
            <p>Marcas</p>
            <img src={BrandsImage} alt="Logos"></img>
        </div>
    );
}