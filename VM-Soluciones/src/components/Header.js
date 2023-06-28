import React from "react";
import InfoBar from "./InfoBar";
import NavBar from "./NavBar";
import "../styles/infobarnavbar.css"

export default function Header(props){
    return (
            <div className="header--container">
                <div className="infobar--navbar">
                    <InfoBar/>
                    <NavBar/>
                </div>
                <img src={props.imageSrc} alt={props.imageAlt} className={props.className} style={{ width: '100%'}}/>
            </div>
        )
    }