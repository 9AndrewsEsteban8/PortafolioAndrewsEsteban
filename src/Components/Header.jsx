import React from 'react'
import {faFacebook,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';
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
        <nav className='social_networks'>
        {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
        ))}
        </nav>
        </header>
    </div>
    );
};

export default Header