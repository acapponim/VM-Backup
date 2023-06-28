import React from "react";
import "../styles/aboutcard.css"

export default function AboutCard(props){
    return (
        <div className="about--card">
            <img src={props.imageSrc} alt={props.imageAlt} className={props.className}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}