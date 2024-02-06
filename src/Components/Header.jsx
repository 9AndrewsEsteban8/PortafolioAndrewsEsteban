import React, { useState } from "react";
import iconPage from '../images/Logo.png';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='navbar'>  
            <nav className={`nav_items ${isOpen && "open"}`}>
                <a href="#">Sobre mi</a>
                <a href="#">Hoja de vida</a>
                <a href="#">Proyectos</a>
                <a href="#">Contacto</a>
            </nav>       
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img className="nav_logo" src={iconPage} alt="Icono de página" />
        </div>
    );
};

export default Header