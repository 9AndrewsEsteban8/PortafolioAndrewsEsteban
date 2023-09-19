import React from 'react'
import Cards from './Cards'
import firstproject from '../images/Project_Sabuja.png'

const Projects = ({children}) => {
  return (
    <div>
        <Cards modifier="Tecnology"/>
        {children}
        <img id='fotosabuj1' src={firstproject} alt='fotoprimerproyectotiendaonline'/>
    </div>
  )
}

export default Projects