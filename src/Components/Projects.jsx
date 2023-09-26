import React from 'react';
import Cards from './Cards';

const Projects = (props) => {
  const { link, imgSrc, imgAlt,text,linkrepo} = props; 

  return (
    <div className='containterProjects'> 
      <h3>{text}</h3>  
      <Cards modifier="Tecnology"> 
        <a href={link}> 
          <img src={imgSrc} alt={imgAlt} />
        </a>  
        
        <a href={linkrepo}><button>Repositorio GitHub</button></a>
        
      </Cards> 
    </div>
  );
}

export default Projects;
