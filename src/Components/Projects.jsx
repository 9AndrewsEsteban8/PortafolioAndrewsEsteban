import React from 'react';
import Cards from './Cards';

const Projects = (props) => {
  const { link, imgSrc, imgAlt } = props; 

  return (
    <div className='containterProjects'>
      <Cards modifier="Tecnology">
        <a href={link}> 
          <img src={imgSrc} alt={imgAlt} />
        </a>
      </Cards>
    </div>
  );
}

export default Projects;
