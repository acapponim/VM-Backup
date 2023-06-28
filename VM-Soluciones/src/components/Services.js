
import EngineerImage from "../images/engineer-image.svg";
import VideocamImage from "../images/videocam-image.svg";
import SparepartsImage from "../images/spareparts-image.svg";
import SupportImage from "../images/support-image.svg";
import ServiceCard from "./ServiceCard";
import "../styles/services.css";

export default function Services(){
    return (
        <div className="services--container">
            <p className="services--title">Nuestros Servicios</p>
            <div className="services--background">
                <ServiceCard 
                imageSrc={EngineerImage} 
                imageAlt="Engineer icon"
                title="Venta e instalación de Cámaras de Seguridad" 
                buttonText="Ver más"
                type="button"
                buttonId="viewmore-btn"
                path="./OurServices"/>
                <ServiceCard
                imageSrc={VideocamImage} 
                imageAlt="Video Camera icon"
                title="Renta de Cámaras de Seguridad" 
                buttonText="Ver más"
                type="button"
                buttonId="viewmore-btn"
                path="./OurServices"/>
                <ServiceCard
                imageSrc={SparepartsImage} 
                imageAlt="Spare Parts icon"
                title="Repuestos" 
                buttonText="Ver más"
                type="button"
                buttonId="viewmore-btn"
                path="./OurServices"/>
                <ServiceCard
                imageSrc={SupportImage} 
                imageAlt="Technical Support icon"
                title="Soporte Técnico"
                buttonText="Ver más"
                type="button"
                buttonId="viewmore-btn"
                path="./OurServices"/>
            </div>
        </div>
  )
}