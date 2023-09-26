import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faChessRook,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import SocialIcon from './SocialIcon';


const socialLinks = [
  { href: 'https://github.com/9AndrewsEsteban8', icon: faGithub,text:'Github'},
  { href: 'https://torre.ai/andrewsesteban', icon: faChessRook ,text:'Torre'},
  { href: 'mailto:andrewsesteban7@gmail.com', icon: faEnvelope,text:'Correo'},
];



const Footer = () => {
  return (
    <div  className='footer'>
      <nav className='social_networks_footer'>
        {socialLinks.map((link,index)=>(
          <SocialIcon 
          key={index} 
          href={link.href} 
          icon={link.icon}
          text={link.text}/>
        ))}
        </nav>
        <p>
        © 2023 Realizado por Andrews Esteban   Copyright All Rights Reserved.  
        </p>
    </div>
  )
}

export default Footer