import React from 'react'
import Cards from './Cards'
import photoreact from '../images/Logoreact.png'
import photoHCJ from '../images/html-js-css.png'
import photoGitHub from '../images/LogoGitHub.png'
import photoGit from '../images/logogit.png'
import photoFigma from '../images/logofigma.png'
import photoExcel from '../images/LogoExcel.png'


const Tecnology = () => {
  return (
    <div className='card_technology'>
      <Cards>
        <img className='photo photo_react animate' src={photoreact} alt="fotodereact" />
        <img className='photo photo_hcj animate' src={photoHCJ} alt="fotodehtmlcssyjavascript" />
        <img className='photo photo_GitHub animate' src={photoGitHub} alt="fotogithub" />
        <img className='photo photo_Git animate' src={photoGit} alt="fotogit" />
        <img className='photo photo_Figma animate' src={photoFigma} alt="fotoFigma" />
      </Cards>
    </div>
  );
}



export default Tecnology