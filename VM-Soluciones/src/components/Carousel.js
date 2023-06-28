import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SurveillanceImage from "../images/surveillance-image.svg"
import ToolsImage from "../images/tools-image.svg"
import ViewingImage from "../images/viewing-image.svg"
import AssistanceImage from "../images/assistance-image.svg"
import CarouselCard from './CarouselCard';
import "../styles/carousel.css"

export default function CarouselComponent(){
        return (
            <div className="carousel--container">
            <Carousel autoPlay stopOnHover infiniteLoop swipeable>
                <div className='surveillance--carousel'>
                    <CarouselCard 
                        imageSrc={SurveillanceImage}
                        imageAlt="A surveillance camera"
                        className="surveillance--card"
                        title="Venta e instalación de Cámaras de Seguridad"
                        description="Ofrecemos sistemas de video vigilancia de la más alta calidad, con lo más avanzado en tecnología de acuerdo a las necesidades específicas de nuestros clientes."
                    />
                </div>
                <div className='viewing--carousel'>
                    <CarouselCard 
                        imageSrc={ViewingImage}
                        imageAlt="A woman viewing a camera"
                        className="viewing--card"
                        title="Renta de Cámaras de Seguridad"
                        description="Además ofrecemos el servicio de alquiler de sistemas de seguridad en circuito cerrado, brindando todo el soporte y mantenimiento para garantizar su óptimo funcionamiento y que usted obtenga el mejor servicio y la seguridad que se merece."
                    />
                </div>
                <div className='assistance--carousel'>
                    <CarouselCard 
                        imageSrc={AssistanceImage}
                        imageAlt="A man using a tablet"
                        className="assistance--card"
                        title="Soporte Técnico y Asesoría"
                        description="Nuestro compromiso son nuestros clientes, y queremos que se sientan siempre acompañados, nuestro personal técnico se encuentra siempre al tanto de cualquier duda o consulta que puedan surgir normalmente con el funcionamiento correcto de cualquier sistema instalado."
                    />
                </div>
                <div className='tools--carousel'>
                    <CarouselCard 
                        imageSrc={ToolsImage}
                        imageAlt="A set of tools"
                        className="tools--card"
                        title="Repuestos"
                        description="En el momento que sea necesario contamos con una amplia gama de accesorios y repuestos para satisfacer cualquier necesidad, sea en cámaras, discos duros, equipos grabadores, y demás."
                    />
                </div>
            </Carousel>
        </div>
    );
}
