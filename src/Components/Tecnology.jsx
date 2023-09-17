import React from 'react'
import Cards from './Cards'
import photoreact from '../images/Logoreact.png'
import photoHCJ from '../images/html-js-css.png'
import photoGitHub from '../images/LogoGitHub.png'
import photoGit from '../images/logogit.png'
import photoFigma from '../images/logofigma.png'
import photoExcel from '../images/LogoExcel.png'
import photoCsharp from '../images/csharp.png'
import photoC from '../images/logoc++.png'
import photolatex from '../images/LaTeX_logo.png'

const Tecnology = () => {
  return (
    <div>
      <Cards>
        <div className='card_technology'>
          <img className='photo photo_react animate' src={photoreact} alt="fotodereact" />
          <img className='photo photo_Figma animate' src={photoFigma} alt="fotoFigma" />
          <img className='photo photo_GitHub animate' src={photoGitHub} alt="fotogithub" />
          <img className='photo photo_Git animate' src={photoGit} alt="fotogit" />
          <img className='photo photo_hcj animate' src={photoHCJ} alt="fotodehtmlcssyjavascript" />
          <img className='photo photo_Excel animate' src={photoExcel} alt="fotoExcel" />
          <img className='photo photo_Csharp animate' src={photoCsharp} alt="fotoCsharp" />
          <img className='photo photo_latex animate' src={photolatex} alt="fotolatex" />
          <img className='photo photo_C animate' src={photoC} alt="fotoC++" />
        </div>
      </Cards>
    </div>
  );
}



export default Tecnology