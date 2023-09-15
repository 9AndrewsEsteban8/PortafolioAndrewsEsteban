import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faChessRook,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import SocialIcon from './SocialIcon';


const socialLinks = [
  { href: 'https://github.com/9AndrewsEsteban8', icon: faGithub },
  { href: 'https://torre.ai/andrewsesteban', icon: faChessRook },
  { href: 'mailto:andrewsesteban7@gmail.com', icon: faEnvelope},
];



const Footer = () => {
  return (
    <div  className='footer'>
      <nav>
        {socialLinks.map((link,index)=>(
          <SocialIcon key={index} href={link.href} icon={link.icon}/>
        ))}
        </nav>
    </div>
  )
}

export default Footer