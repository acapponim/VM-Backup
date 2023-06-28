import Header from "./Header";
import Brands from "./Brands";
import Strip from "./Strip";
import Footer from "./Footer";
import CarouselComponent from "./Carousel";
import React from "react";
import ServicesImage from "../images/ourservices-image.png";
import "../styles/ourservices.css"

export default function OurServices(){
    return (
        <div className="ourservices--container">
            <Header
            imageSrc={ServicesImage}
            alt="Banner of surveillance cameras"
            className="cover--image"/>
            <div className="ourservices--body">
                <p className="ourservices--title">Nuestros Servicios</p>
                <CarouselComponent />
            </div>
            <Brands/>
            <Strip/>
        </div>
    )
}