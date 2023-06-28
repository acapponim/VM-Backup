import "../styles/usercard.css"
import React from "react";

export default function UserCard(props){
    return (
            <div className="user--card">
                <img src={props.imageSrc} alt={props.imageAlt} className={props.className}/>
                <h3>{props.title}</h3>
                <p style={{ fontStyle: "italic" }}>{props.description}</p>
            </div>
        )
}