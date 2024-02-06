import React, { useState } from "react";
import iconPage from '../images/Logo.png';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='navbar'>
            <img className="nav_logo" src={iconPage} alt="Icono de página" />
            <nav className={`nav_items ${isOpen && "open"}`}>
                <a href="#">Perfil</a>
                <a href="#">Educacio</a>
                <a href="#">Habilidades</a>
                <a href="#">Contacto</a>
            </nav>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Header