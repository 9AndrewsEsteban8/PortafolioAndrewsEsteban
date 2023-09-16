import React from 'react'
import Cards from './Cards'
import photoreact from '../images/Logoreact.png'
import photoHCJ from '../images/html-js-css.png'
import photoGitHub from '../images/LogoGitHub.png'

const Tecnology = () => {
  return (
    <div className='card_tecnology'>
      <Cards>
        <img id ='photo_react'src={photoreact} alt="fotodereact" />
        <img id = 'photo-hcj' src ={photoHCJ} alt = "fotodehtmlcssyjavascript" />
        <img id = 'photo-GitHub' src ={photoGitHub} alt = "fotogihub" />
      </Cards>
    </div>
  )
}

export default Tecnology