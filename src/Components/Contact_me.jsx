import React from 'react'
import foto_contacto from '../images/Foto_contacto.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

const Contact_me = () => {
  return (
    <div className='styles_contact'>
      <h1>Contactame</h1>
        <img src={foto_contacto} alt="foto de la persona del portafolio" />
        <FontAwesomeIcon icon={faEnvelope} size='2x'/>
        <p>andrewsesteban7@gmail.com</p>
        <FontAwesomeIcon icon={faPhone} size='2x'/>
        <p>3134020890</p>
        
    </div>
  )
}

export default Contact_me