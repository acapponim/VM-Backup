import React from "react";
import "../styles/carouselcard.css"

export default function CarouselCard(props){
    return (
        <div className="carousel--card--container">
            <img src={props.imageSrc} alt={props.imageAlt} className={props.className}/>
            <div className="text--wrapper">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}