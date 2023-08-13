import React from 'react'
import {faFacebook,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';
import Menu from './Menu';
import iconPage from '../images/Logo.png';


const socialLinks = [
    { href: 'https://www.facebook.com/Esteban.Andrews', icon: faFacebook },
    { href: 'https://www.linkedin.com/in/andrews-esteban-601388140/', icon: faLinkedin },
    { href: 'https://www.instagram.com/andrews_esteban/', icon: faInstagram },
];

const Header = () => {
    return (
    <div>
        <header>
        <img src={iconPage} alt="Icono de página"/>
        {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
        ))}
        <Menu/>
        </header>
    </div>
    );
};

export default Header