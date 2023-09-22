import React from 'react'
import foto_contacto from '../images/Foto_contacto.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons'

const Contact_me = () => {
  return (
    <div className='styles_contact'>
      <h2>Contactame</h2>
        <img src={foto_contacto} alt="foto de la persona del portafolio" />
        <div className='links_contact'>
          <FontAwesomeIcon className='icon-contact' icon={faLocationDot} size='2x'/>
          <p>Bogotá, Colombia</p>
          <FontAwesomeIcon className='icon-contact' icon={faPhone} size='2x'/>
          <p>(+57)3134020890</p> 
        </div>     
    </div>
  )
}

export default Contact_me