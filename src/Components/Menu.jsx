import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'




const Menu = () => {

  const [menu,setMenu] = useState(true)
  const toggleMenu =() =>{
    setMenu(!menu)
  }

  return (
    <div>
        <button
        onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>
        <nav className={`menu ${menu ? 'active' : ''}`}>
            <a href="#">Home</a>
            <a href="#">Perfil</a>
            <a href="#">Tecnologias</a>
            <a href="#">Proyectos</a>
            <a href="#">Contactame</a>
        </nav>
    </div>
  )
}

export default Menu