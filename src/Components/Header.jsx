import React, { useState } from "react";
import iconPage from '../images/Logo.png';
import { Link as ScrollLink} from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='navbar'>
            <nav className={`nav_items ${isOpen && "open"}`}>
                <ScrollLink  className="scroll-link" to="aboutme" smooth={true} offset={-50}>
                    Sobre mi
                </ScrollLink>

                <ScrollLink  className="scroll-link" to="container-socialmedia" smooth={true} offset={-175}>
                    Curriculum
                </ScrollLink>

                <ScrollLink  className="scroll-link" to="text_projects" smooth={true} offset={-140}>
                    Proyectos
                </ScrollLink>

                <ScrollLink className="scroll-link" to="styles_contact" smooth={true} offset={-100}>
                    Contacto
                </ScrollLink>
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