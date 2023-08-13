import React from 'react'
import foto from '../images/Foto_Inicio.jpeg'
import {faFacebook,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';



const socialLinks = [
    { href: 'https://www.facebook.com/Esteban.Andrews', icon: faFacebook },
    { href: 'http://linkedin.com', icon: faLinkedin },
    { href: 'http://Intagram.com', icon: faInstagram },
  ];
  
  const Header = () => {
    return (
      <div>
        Header
        <img className="foto_header" src={foto} alt="foto.mia" />
        {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
        ))}
      </div>
    );
  };

export default Header